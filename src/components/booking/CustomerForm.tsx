import { useState, type FormEvent } from "react";

type CustomerData = {
  name: string;
  whatsapp: string;
  notes: string;
};

type CustomerFormProps = {
  onReview: (customer: CustomerData) => void;

  onDataChange: () => void;
};

function CustomerForm({ onReview, onDataChange }: CustomerFormProps) {
  const [name, setName] = useState("");

  const [whatsapp, setWhatsapp] = useState("");

  const [notes, setNotes] = useState("");

  const [agreement, setAgreement] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cleanName = name.trim();

    const cleanWhatsapp = whatsapp.replace(/\D/g, "");

    const validWhatsapp = /^(?:62|0)8[1-9][0-9]{7,11}$/;

    if (cleanName.length < 2) {
      setError("Nama pelanggan minimal 2 karakter.");

      return;
    }

    if (!validWhatsapp.test(cleanWhatsapp)) {
      setError("Masukkan nomor WhatsApp Indonesia yang valid.");

      return;
    }

    if (!agreement) {
      setError("Centang persetujuan sebelum melanjutkan.");

      return;
    }

    setError("");

    onReview({
      name: cleanName,
      whatsapp: cleanWhatsapp,
      notes: notes.trim(),
    });
  };

  return (
    <div className="booking-next-step">
      <p className="booking-step">STEP 05 / CUSTOMER</p>

      <h3>Complete your details.</h3>

      <form className="booking-customer-form" onSubmit={handleSubmit}>
        <div className="booking-form-group">
          <label htmlFor="customer-name">Customer name</label>

          <input
            id="customer-name"
            type="text"
            value={name}
            placeholder="Example: Carlos"
            autoComplete="name"
            maxLength={60}
            onChange={(event) => {
              setName(event.target.value);

              setError("");
              onDataChange();
            }}
          />
        </div>

        <div className="booking-form-group">
          <label htmlFor="customer-whatsapp">WhatsApp number</label>

          <input
            id="customer-whatsapp"
            type="tel"
            inputMode="numeric"
            value={whatsapp}
            placeholder="Example: 081234567890"
            autoComplete="tel"
            maxLength={15}
            onChange={(event) => {
              setWhatsapp(event.target.value);

              setError("");
              onDataChange();
            }}
          />

          <small>Gunakan nomor WhatsApp aktif untuk konfirmasi booking.</small>
        </div>

        <div className="booking-form-group booking-form-full">
          <label htmlFor="customer-notes">Notes (optional)</label>

          <textarea
            id="customer-notes"
            value={notes}
            placeholder="Contoh: ingin model low fade"
            maxLength={200}
            rows={4}
            onChange={(event) => {
              setNotes(event.target.value);

              onDataChange();
            }}
          />

          <small>{notes.length}/200 characters</small>
        </div>

        <label className="booking-agreement">
          <input
            type="checkbox"
            checked={agreement}
            onChange={(event) => {
              setAgreement(event.target.checked);

              setError("");
              onDataChange();
            }}
          />

          <span>
            Saya memastikan data booking sudah benar dan akan menghubungi
            BOSSHEAD jika ingin membatalkan jadwal.
          </span>
        </label>

        {error && <p className="booking-form-error">{error}</p>}

        <button className="booking-review-button" type="submit">
          REVIEW BOOKING
        </button>
      </form>
    </div>
  );
}

export type { CustomerData };

export default CustomerForm;
