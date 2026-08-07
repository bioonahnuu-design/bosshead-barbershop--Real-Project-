import { useState } from "react";
import { supabase } from "../../lib/supabase";

type BookingConfirmationProps = {
  serviceId: string;
  serviceName: string;
  barberId: string;
  barberName: string;
  bookingDate: string;
  bookingTime: string;
  customerName: string;
  customerWhatsapp: string;
  customerNotes: string;
};

function BookingConfirmation({
  serviceId,
  serviceName,
  barberId,
  barberName,
  bookingDate,
  bookingTime,
  customerName,
  customerWhatsapp,
  customerNotes,
}: BookingConfirmationProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitError, setSubmitError] = useState("");

  const [bookingCode, setBookingCode] = useState("");

  const handleConfirmBooking = async () => {
    if (isSubmitting || bookingCode) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    const { data, error } = await supabase.rpc("create_booking", {
      p_service_id: serviceId,
      p_barber_id: barberId,
      p_booking_date: bookingDate,
      p_booking_time: bookingTime,
      p_customer_name: customerName,
      p_customer_whatsapp: customerWhatsapp,
      p_customer_notes: customerNotes || null,
    });

    if (error) {
      console.error("Booking error:", error);

      const isScheduleConflict =
        error.code === "23P01" ||
        error.message.toLowerCase().includes("overlap") ||
        error.message
          .toLowerCase()
          .includes("bookings_prevent_schedule_overlap");

      if (isScheduleConflict) {
        setSubmitError(
          "Jadwal tersebut baru saja diambil pelanggan lain. Silakan pilih jam lain.",
        );
      } else {
        setSubmitError(
          error.message || "Booking gagal disimpan. Silakan coba kembali.",
        );
      }

      setIsSubmitting(false);
      return;
    }

    if (!data) {
      setSubmitError("Booking tersimpan, tetapi kode booking tidak diterima.");

      setIsSubmitting(false);
      return;
    }

    setBookingCode(String(data));
    setIsSubmitting(false);
  };

  if (bookingCode) {
    return (
      <div className="booking-success">
        <div className="booking-success-icon">✓</div>

        <p className="booking-step">BOOKING SUCCESS</p>

        <h3>Your seat is reserved.</h3>

        <p className="booking-success-message">
          Booking telah masuk ke sistem BOSSHEAD. Simpan kode berikut untuk
          konfirmasi atau pembatalan.
        </p>

        <div className="booking-code">
          <span>BOOKING CODE</span>

          <strong>{bookingCode}</strong>
        </div>

        <a
          className="booking-whatsapp-button"
          href={`https://wa.me/6281233714565?text=${encodeURIComponent(
            `Halo BOSSHEAD 👋

Saya ingin mengonfirmasi booking:

Kode Booking: ${bookingCode}
Nama Customer: ${customerName}
Layanan: ${serviceName}
Barber: ${barberName}
Tanggal: ${bookingDate}
Jam: ${bookingTime} WIB
Catatan: ${customerNotes || "-"}

Mohon konfirmasi booking saya. Terima kasih.`,
          )}`}
          target="_blank"
          rel="noreferrer"
        >
          CONFIRM VIA WHATSAPP
        </a>
      </div>
    );
  }

  return (
    <div className="booking-confirmation-action">
      {submitError && <p className="booking-submit-error">{submitError}</p>}

      <button
        className="booking-confirm-button"
        type="button"
        disabled={isSubmitting}
        onClick={handleConfirmBooking}
      >
        {isSubmitting ? "SAVING BOOKING..." : "CONFIRM BOOKING"}
      </button>

      <small className="booking-database-note">
        Jadwal akan diperiksa kembali sebelum disimpan ke database.
      </small>
    </div>
  );
}

export default BookingConfirmation;
