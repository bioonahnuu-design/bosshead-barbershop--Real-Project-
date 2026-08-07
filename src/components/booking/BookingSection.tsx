import { useState, type ChangeEvent } from "react";
import "./BookingSection.css";
import CustomerForm, { type CustomerData } from "./CustomerForm";
import BookingConfirmation from "./BookingConfirmation";

type Service = {
  id: string;
  name: string;
  price: number;
  duration: number;
};

type Barber = {
  id: string;
  name: string;
  specialty: string;
};

const services: Service[] = [
  {
    id: "haircut",
    name: "Haircut Only",
    price: 50000,
    duration: 45,
  },
  {
    id: "bosshead-package",
    name: "Bosshead Package",
    price: 60000,
    duration: 45,
  },
];

const barbers: Barber[] = [
  {
    id: "barber-01",
    name: "Mas Eky",
    specialty: "Classic & Clean Cut",
  },
  {
    id: "barber-02",
    name: "Mas Juna",
    specialty: "Fade & Modern Style",
  },
  {
    id: "barber-03",
    name: "Mas Jhony",
    specialty: "Texture & Styling",
  },
  {
    id: "barber-04",
    name: "Barber 04",
    specialty: "All-Round Barber",
  },
];

function formatDateForInput(date: Date) {
  const year = date.getFullYear();

  const month = String(date.getMonth() + 1).padStart(2, "0");

  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function addDays(date: Date, numberOfDays: number) {
  const result = new Date(date);

  result.setDate(result.getDate() + numberOfDays);

  return result;
}

function formatSelectedDate(dateValue: string) {
  const [year, month, day] = dateValue.split("-").map(Number);

  const date = new Date(year, month - 1, day);

  return new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function createTimeSlots() {
  const slots: string[] = [];

  const openingMinutes = 11 * 60;
  const lastBookingMinutes = 20 * 60;
  const interval = 30;

  for (
    let minutes = openingMinutes;
    minutes <= lastBookingMinutes;
    minutes += interval
  ) {
    const hour = Math.floor(minutes / 60);

    const minute = minutes % 60;

    const formattedHour = String(hour).padStart(2, "0");

    const formattedMinute = String(minute).padStart(2, "0");

    slots.push(`${formattedHour}:${formattedMinute}`);
  }

  return slots;
}

const timeSlots = createTimeSlots();

function isTimeSlotAvailable(selectedDate: string, selectedTime: string) {
  if (!selectedDate) {
    return false;
  }

  const now = new Date();

  const [year, month, day] = selectedDate.split("-").map(Number);

  const [hour, minute] = selectedTime.split(":").map(Number);

  const slotDate = new Date(year, month - 1, day, hour, minute);

  const minimumBookingTime = new Date(now.getTime() + 30 * 60 * 1000);

  return slotDate >= minimumBookingTime;
}

function BookingSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);

  const [selectedDate, setSelectedDate] = useState("");

  const [selectedTime, setSelectedTime] = useState("");

  const [customerData, setCustomerData] = useState<CustomerData | null>(null);

  const today = new Date();

  const minimumDate = formatDateForInput(today);

  const maximumDate = formatDateForInput(addDays(today, 30));

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setSelectedBarber(null);
    setSelectedDate("");
    setSelectedTime("");
    setCustomerData(null);
  };

  const handleBarberSelect = (barber: Barber) => {
    setSelectedBarber(barber);
    setSelectedDate("");
    setSelectedTime("");
    setCustomerData(null);
  };

  const handleDateSelect = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);

    setSelectedTime("");
    setCustomerData(null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setCustomerData(null);
  };

  return (
    <section className="booking-section" id="booking">
      <div className="booking-heading">
        <p>05 / BOOK YOUR SEAT</p>

        <h2>
          READY FOR A
          <br />
          FRESH CUT?
        </h2>
      </div>

      <div className="booking-panel">
        {/* STEP 01 — SERVICE */}

        <p className="booking-step">STEP 01 / SERVICE</p>

        <h3>Choose your service.</h3>

        <div className="booking-service-grid">
          {services.map((service) => (
            <button
              key={service.id}
              type="button"
              className={
                selectedService?.id === service.id
                  ? "booking-service active"
                  : "booking-service"
              }
              onClick={() => handleServiceSelect(service)}
            >
              <div>
                <span>{service.name}</span>

                <small>± {service.duration} minutes</small>
              </div>

              <strong>
                Rp
                {service.price.toLocaleString("id-ID")}
              </strong>
            </button>
          ))}
        </div>

        {/* STEP 02 — BARBER */}

        {selectedService && (
          <div className="booking-next-step">
            <p className="booking-step">STEP 02 / BARBER</p>

            <h3>Choose your barber.</h3>

            <div className="booking-barber-grid">
              {barbers.map((barber) => (
                <button
                  key={barber.id}
                  type="button"
                  className={
                    selectedBarber?.id === barber.id
                      ? "booking-barber active"
                      : "booking-barber"
                  }
                  onClick={() => handleBarberSelect(barber)}
                >
                  <div className="barber-avatar">{barber.name.slice(-2)}</div>

                  <div>
                    <strong>{barber.name}</strong>

                    <small>{barber.specialty}</small>

                    <span className="barber-status">Available</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 03 — DATE */}

        {selectedService && selectedBarber && (
          <div className="booking-next-step">
            <p className="booking-step">STEP 03 / DATE</p>

            <h3>Choose your visit date.</h3>

            <div className="booking-date-container">
              <label className="booking-date-label" htmlFor="booking-date">
                Visit date
              </label>

              <input
                id="booking-date"
                className="booking-date-input"
                type="date"
                value={selectedDate}
                min={minimumDate}
                max={maximumDate}
                onChange={handleDateSelect}
                onClick={(event) => {
                  event.currentTarget.showPicker();
                }}
                onKeyDown={(event) => {
                  event.preventDefault();
                }}
                onPaste={(event) => {
                  event.preventDefault();
                }}
                aria-label="Pilih tanggal booking"
              />

              <small className="booking-date-note">
                Booking tersedia mulai hari ini hingga 30 hari ke depan.
              </small>
            </div>
          </div>
        )}

        {/* STEP 04 — TIME */}

        {selectedService && selectedBarber && selectedDate && (
          <div className="booking-next-step">
            <p className="booking-step">STEP 04 / TIME</p>

            <h3>Choose your time.</h3>

            <p className="booking-time-information">
              Open daily from 11:00 until 21:00. Last booking starts at 20:00.
            </p>

            <div className="booking-time-grid">
              {timeSlots.map((time) => {
                const available = isTimeSlotAvailable(selectedDate, time);

                return (
                  <button
                    key={time}
                    type="button"
                    disabled={!available}
                    className={
                      selectedTime === time
                        ? "booking-time active"
                        : "booking-time"
                    }
                    onClick={() => handleTimeSelect(time)}
                  >
                    <span>{time}</span>

                    <small>{available ? "Available" : "Passed"}</small>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 05 — CUSTOMER */}

        {selectedService && selectedBarber && selectedDate && selectedTime && (
          <CustomerForm
            key={`${selectedService.id}-${selectedBarber.id}-${selectedDate}-${selectedTime}`}
            onReview={(customer) => setCustomerData(customer)}
            onDataChange={() => setCustomerData(null)}
          />
        )}

        {/* BOOKING SUMMARY */}

        {selectedService && selectedBarber && (
          <div className="booking-summary">
            <p>YOUR BOOKING</p>

            <div>
              <span>Service</span>

              <strong>{selectedService.name}</strong>
            </div>

            <div>
              <span>Barber</span>

              <strong>{selectedBarber.name}</strong>
            </div>

            <div>
              <span>Duration</span>

              <strong>± {selectedService.duration} minutes</strong>
            </div>

            <div>
              <span>Price</span>

              <strong>
                Rp
                {selectedService.price.toLocaleString("id-ID")}
              </strong>
            </div>

            {selectedDate && (
              <div>
                <span>Date</span>

                <strong>{formatSelectedDate(selectedDate)}</strong>
              </div>
            )}

            {selectedTime && (
              <div>
                <span>Time</span>

                <strong>{selectedTime} WIB</strong>
              </div>
            )}
          </div>
        )}

        {/* STEP 06 — REVIEW */}

        {selectedService &&
          selectedBarber &&
          selectedDate &&
          selectedTime &&
          customerData && (
            <div className="booking-final-review">
              <p className="booking-step">STEP 06 / REVIEW</p>

              <h3>Confirm your booking.</h3>

              <div className="booking-review-customer">
                <div>
                  <span>Customer</span>

                  <strong>{customerData.name}</strong>
                </div>

                <div>
                  <span>WhatsApp</span>

                  <strong>{customerData.whatsapp}</strong>
                </div>

                {customerData.notes && (
                  <div>
                    <span>Notes</span>

                    <strong>{customerData.notes}</strong>
                  </div>
                )}
              </div>

              <BookingConfirmation
                serviceId={selectedService.id}
                serviceName={selectedService.name}
                barberId={selectedBarber.id}
                barberName={selectedBarber.name}
                bookingDate={selectedDate}
                bookingTime={selectedTime}
                customerName={customerData.name}
                customerWhatsapp={customerData.whatsapp}
                customerNotes={customerData.notes}
              />
            </div>
          )}
      </div>
    </section>
  );
}

export default BookingSection;
