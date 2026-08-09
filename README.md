BOSSHEAD Barbershop — Booking System

<p align="center">
  <strong>Real-world booking web application for BOSSHEAD Barbershop, Surabaya.</strong><br/>
  From WhatsApp + handwritten reservations to a structured digital booking workflow.
</p>

<p align="center">
  <a href="https://bosshead-barbershop-real-project.vercel.app"><strong>Live Website</strong></a>
  ·
  <a href="https://github.com/bioonahnuu-design/bosshead-barbershop--Real-Project-">GitHub Repository</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-Frontend-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Supabase-PostgreSQL-3FCF8E?logo=supabase&logoColor=white" alt="Supabase" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-000000?logo=vercel&logoColor=white" alt="Vercel" />
</p>

About the Project

BOSSHEAD Booking System is not a tutorial or fictional case study. It started from an operational problem I encountered while working as a cashier at BOSSHEAD Barbershop in Surabaya.

The project is being developed with permission from the barbershop owner and is designed to become a system that can be used in the shop's day-to-day booking process.

Instead of building a generic reservation platform for restaurants, cafés, salons, and other businesses, this project intentionally focuses on the actual workflow and visual identity of BOSSHEAD Barbershop.

The Real Problem

Before this system

The booking process depended heavily on WhatsApp and a physical notebook:

A customer contacted the cashier through WhatsApp.

The customer asked whether a barber and time were available.

The cashier checked the schedule manually.

If available, the cashier wrote the customer's reservation in a notebook.

When a customer cancelled or changed the schedule, the notebook had to be updated manually.

This process works for a small number of reservations, but it creates avoidable operational problems as bookings increase.

Problems identified

Problem

Operational Impact

Reservations are written manually

Data can be missed, duplicated, or difficult to search

Availability is checked by the cashier

Customers depend on staff before they can reserve

Barber schedules are tracked manually

Higher risk of two customers requesting the same slot

Cancellation is handled through chat

A cancelled slot may not immediately return to availability

Booking history is stored on paper/chat

Difficult to organize and use as operational data

WhatsApp acts as the booking system

Chat remains useful, but it is not a structured reservation database

Problem-Solving Approach

The goal is not to eliminate WhatsApp. The goal is to separate communication from reservation management.

OLD FLOW

Customer
↓
WhatsApp Cashier
↓
Cashier checks manually
↓
Paper notebook
↓
Manual cancellation / schedule changes

NEW FLOW

Customer
↓
BOSSHEAD Website
↓
Choose Service → Barber → Date → Time
↓
Enter Customer Details
↓
Review Booking
↓
Supabase Database
↓
Booking Code + WhatsApp communication

Customers can make their own reservations from the website, while the cashier can still help customers who prefer to book through WhatsApp. Both flows are intended to end in the same structured booking system.

Booking Workflow

The customer booking experience is intentionally simple and mobile-first:

1. Choose a service

Initial services included in the MVP:

Service

Price

Estimated Duration

Haircut Only

Rp50.000

±45 minutes

BOSSHEAD Package

Rp60.000

±45 minutes

The complete BOSSHEAD price list can be added progressively without changing the booking architecture.

2. Choose a barber

The interface currently provides four barber slots. The data structure is designed so the actual barber names can be maintained without changing the rest of the booking flow.

3. Choose a visit date

Customers select the visit date through a date input instead of typing the date manually.

4. Choose an available time

BOSSHEAD operates from 11:00 to 21:00 WIB. The booking interface provides scheduled time slots while considering service duration and barber availability.

5. Complete customer details

The booking stores the information needed by the shop:

customer name;

WhatsApp number;

optional haircut/request notes.

6. Review before saving

Before confirmation, the customer can review:

service;

selected barber;

date;

time;

price;

duration;

contact information;

notes.

This reduces accidental bookings caused by incorrect selections.

7. Save and confirm

After confirmation, the booking is stored in Supabase and the system generates a booking reference/code. WhatsApp can then be used for communication using the reservation information already collected by the system.

Handling Slot Conflicts

Preventing schedule collisions is one of the most important requirements of the project.

A slot is not treated only as a time such as 14:00. Availability depends on the combination of:

Barber + Visit Date + Start Time + Booking Status

This matters because four barbers can serve customers at the same time, but the same barber must not have two active reservations for the same schedule.

The database is therefore the source of truth for bookings rather than the customer's browser alone.

Cancellation Logic

Cancellation is part of the booking lifecycle, not simply a deleted row.

Active Booking
↓
Customer cancels
↓
Status → cancelled
↓
That barber/date/time is available again

Keeping the reservation with a cancelled status makes the booking history more useful than permanently deleting the record.

Current Features

Customer side

Responsive BOSSHEAD landing page

Real venue and BOSSHEAD visual assets

Service selection

Barber selection

Visit date selection

Time-slot selection

Customer form

Optional customer notes

Booking review step

Database-backed booking submission

Booking reference/code

WhatsApp booking communication

Cancellation support

Promotion / price-list / membership content

Responsive layout for mobile and desktop

Data layer

Supabase PostgreSQL database

Structured bookings data

Booking status lifecycle

Customer and reservation information stored together

Environment-based Supabase configuration

Booking Data Model

The booking record contains the operational information needed to manage a reservation.

Field

Purpose

id

Unique database identifier

booking_code

Human-readable booking reference

service_id / service_name

Selected treatment

barber_id / barber_name

Selected barber

customer_name

Customer identity

customer_whatsapp

Customer contact

customer_notes

Optional request / haircut note

starts_at

Reservation start

ends_at

Estimated reservation end

duration_minutes

Service duration

price

Booking price

status

Booking lifecycle state

source

Origin of the reservation

created_at / updated_at

Record timestamps

Booking lifecycle

pending → confirmed → completed
│ │
└───────────┴────→ cancelled

This prepares the system for a future staff dashboard without redesigning the customer booking database.

UI / UX Direction

The interface is designed around the actual atmosphere of BOSSHEAD rather than a generic SaaS template.

Design characteristics:

dark charcoal / black base;

BOSSHEAD amber accent;

bold condensed typography;

real BOSSHEAD venue photography;

responsive layouts for customers opening the link from WhatsApp or Instagram;

subtle animation and hover effects;

promotion, membership, price list, gallery, map, and booking presented as parts of one brand experience.

The priority is to make the site visually distinctive while remaining practical on mobile devices and cellular connections.

Architecture

┌───────────────────────┐
│ Customer │
│ Mobile / Desktop Web │
└───────────┬───────────┘
│
▼
┌───────────────────────┐
│ React + TypeScript │
│ Vite Web Application │
└───────────┬───────────┘
│
▼
┌───────────────────────┐
│ Supabase Client │
└───────────┬───────────┘
│
▼
┌───────────────────────┐
│ Supabase PostgreSQL │
│ Booking Data │
└───────────────────────┘

Deployment: Vercel
Communication: WhatsApp

Tech Stack

Category

Technology

Why it is used

UI

React 19

Component-based interactive booking flow

Language

TypeScript

Safer data structures for services, barbers, and bookings

Build Tool

Vite

Fast local development and production build

Styling

CSS

Custom BOSSHEAD branding and responsive UI

Database

Supabase PostgreSQL

Persistent structured booking data

Client SDK

@supabase/supabase-js

Frontend-to-Supabase integration

Hosting

Vercel

Production deployment and GitHub integration

Version Control

Git + GitHub

Development history and portfolio documentation

Project Structure

bosshead-booking/
├── public/
│ ├── gallery/ # BOSSHEAD atmosphere / gallery assets
│ ├── membership/ # Membership visuals
│ ├── promo/ # Active promotion assets
│ ├── services/ # Price-list / service assets
│ └── venue/ # BOSSHEAD venue photography
│
├── src/
│ ├── components/
│ │ └── booking/ # Booking UI, customer form, confirmation
│ ├── lib/
│ │ └── supabase.ts # Supabase client configuration
│ ├── App.tsx
│ ├── App.css
│ └── main.tsx
│
├── .env.local # Local only — never commit
├── package.json
└── README.md

Run Locally

Prerequisites

Node.js

npm

Supabase project

1. Clone the repository

git clone https://github.com/bioonahnuu-design/bosshead-barbershop--Real-Project-.git
cd bosshead-barbershop--Real-Project-

2. Install dependencies

npm install

3. Configure environment variables

Create .env.local in the project root:

VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key

Do not commit .env.local.

4. Start development server

npm run dev

5. Production build

npm run build

Security Notes

Environment-specific configuration is kept outside the repository.

.env.local is ignored by Git.

The frontend uses the Supabase publishable key, not a database password or service-role secret.

Database authorization should be enforced through Supabase Row Level Security policies.

A production admin interface must use authentication and appropriate authorization before staff-only operations are exposed.

What I Learned

This project is more than a frontend exercise. It required translating a real workplace process into software.

Key lessons include:

identifying an operational problem before choosing technology;

designing a booking flow around actual customer behaviour;

separating services, barbers, schedules, customers, and booking states;

treating the database as the source of truth for availability;

handling cancellation as application state instead of deleting history;

integrating React with a hosted PostgreSQL backend;

managing environment variables safely;

deploying a real client project and maintaining it through GitHub.

Roadmap

The project is intentionally being developed in phases.

Phase 1 — Customer Booking MVP ✅

BOSSHEAD branded website

Responsive booking experience

Service / barber / date / time selection

Customer information and booking review

Supabase booking persistence

Confirmation reference

Cancellation flow

Vercel production deployment

Phase 2 — Staff Operations 🚧

Authenticated staff/admin login

Daily booking dashboard

Confirm / complete / cancel booking from dashboard

Cashier manual booking entry for WhatsApp customers

Barber availability management

Search and filter reservations

Phase 3 — Automation

Optional WhatsApp chatbot integration

Automatic booking confirmation / reminder

Reschedule workflow

Basic booking analytics

PWA support

The core booking system is intentionally designed to remain usable even without a paid WhatsApp API. Chatbot integration is an enhancement, not a dependency.

Why This Project Matters

The value of this project is not its number of features. It demonstrates the complete path from a real operational problem to a deployable software solution:

Observe a real problem → understand the workflow → design a solution → build the system → connect real data → deploy → improve with user feedback.

That is the main reason BOSSHEAD Booking System is part of my portfolio.

Author

Nahnu RohmaniaInformatics Engineering — Universitas 17 Agustus 1945 Surabaya

Built as a real-world project for BOSSHEAD Barbershop, Surabaya, with permission from the business owner.

<p align="center">
  <strong>LOOK SHARP. STAY BOSS.</strong>
</p>
