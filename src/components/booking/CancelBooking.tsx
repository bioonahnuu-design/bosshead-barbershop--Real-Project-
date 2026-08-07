import { useState, type FormEvent } from "react";

import { supabase } from "../../lib/supabase";

import "./CancelBooking.css";

function CancelBooking() {
  const [bookingCode, setBookingCode] = useState("");

  const [whatsapp, setWhatsapp] = useState("");

  const [isCancelling, setIsCancelling] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [isCancelled, setIsCancelled] = useState(false);

  const handleCancelBooking = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanBookingCode = bookingCode.trim().toUpperCase();

    const cleanWhatsapp = whatsapp.replace(/\D/g, "");

    if (!cleanBookingCode) {
      setErrorMessage("Masukkan kode booking.");

      return;
    }

    const validWhatsapp = /^(?:62|0)8[1-9][0-9]{7,11}$/;

    if (!validWhatsapp.test(cleanWhatsapp)) {
      setErrorMessage("Masukkan nomor WhatsApp yang valid.");

      return;
    }

    const confirmCancellation = window.confirm(
      "Yakin ingin membatalkan booking ini?",
    );

    if (!confirmCancellation) {
      return;
    }

    setIsCancelling(true);
    setErrorMessage("");
    setIsCancelled(false);

    const { data, error } = await supabase.rpc("cancel_booking", {
      p_booking_code: cleanBookingCode,

      p_customer_whatsapp: cleanWhatsapp,
    });

    if (error) {
      console.error("Cancellation error:", error);

      setErrorMessage("Pembatalan gagal diproses. Silakan coba kembali.");

      setIsCancelling(false);
      return;
    }

    if (data !== true) {
      setErrorMessage(
        "Booking tidak ditemukan, sudah dibatalkan, sudah selesai, atau nomor WhatsApp tidak cocok.",
      );

      setIsCancelling(false);
      return;
    }

    setIsCancelled(true);
    setIsCancelling(false);
    setBookingCode("");
    setWhatsapp("");
  };

  return (
    <section className="cancel-section" id="cancel-booking">
      <div className="cancel-heading">
        <p>NEED TO CHANGE YOUR PLAN?</p>

        <h2>
          CANCEL
          <br />
          BOOKING.
        </h2>

        <span>
          Masukkan kode booking dan nomor WhatsApp yang digunakan ketika
          melakukan reservasi.
        </span>
      </div>

      <div className="cancel-panel">
        {isCancelled ? (
          <div className="cancel-success">
            <div className="cancel-success-icon">✓</div>

            <h3>Booking cancelled.</h3>

            <p>
              Booking berhasil dibatalkan dan slot jadwal sudah tersedia kembali
              untuk customer lain.
            </p>

            <button type="button" onClick={() => setIsCancelled(false)}>
              CANCEL ANOTHER BOOKING
            </button>
          </div>
        ) : (
          <>
            <p className="cancel-step">CUSTOMER CANCELLATION</p>

            <h3>Find your booking.</h3>

            <form className="cancel-form" onSubmit={handleCancelBooking}>
              <div className="cancel-form-group">
                <label htmlFor="cancel-code">Booking code</label>

                <input
                  id="cancel-code"
                  type="text"
                  value={bookingCode}
                  placeholder="Contoh: A12BC34DEF"
                  maxLength={20}
                  autoComplete="off"
                  onChange={(event) => {
                    setBookingCode(event.target.value.toUpperCase());

                    setErrorMessage("");
                  }}
                />
              </div>

              <div className="cancel-form-group">
                <label htmlFor="cancel-whatsapp">WhatsApp number</label>

                <input
                  id="cancel-whatsapp"
                  type="tel"
                  inputMode="numeric"
                  value={whatsapp}
                  placeholder="Nomor WhatsApp booking"
                  maxLength={15}
                  autoComplete="tel"
                  onChange={(event) => {
                    setWhatsapp(event.target.value);

                    setErrorMessage("");
                  }}
                />
              </div>

              {errorMessage && <p className="cancel-error">{errorMessage}</p>}

              <button
                className="cancel-button"
                type="submit"
                disabled={isCancelling}
              >
                {isCancelling ? "CANCELLING..." : "CANCEL BOOKING"}
              </button>
            </form>

            <p className="cancel-warning">
              Booking yang sudah selesai atau sudah dibatalkan tidak dapat
              dibatalkan kembali.
            </p>
          </>
        )}
      </div>
    </section>
  );
}

export default CancelBooking;
