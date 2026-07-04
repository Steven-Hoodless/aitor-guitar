// ============================================================
// AITOR GUITAR — Availability Configuration
// ============================================================
// Edit this file to update the calendar on the website.
//
// UNAVAILABLE_DATES: specific dates Aitor is NOT available.
// Add dates in YYYY-MM-DD format, one per line.
//
// OFF_DAYS: days of the week Aitor never works.
// 0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday,
// 4=Thursday, 5=Friday, 6=Saturday
// ============================================================

const CONFIG = {

    unavailableDates: [
        // June 2026
        '2026-06-01',   // Booked
        '2026-06-18',   // Booked
        '2026-06-19',   // Booked
        '2026-06-25',   // Booked
        '2026-06-28',   // Booked

        // July 2026
        '2026-07-04',   // Booked
        '2026-07-05',   // Booked
        '2026-07-12',   // Booked
        '2026-07-19',   // Booked
        '2026-07-20',   // Booked
    ],

    // Days of the week Aitor never performs
    // Currently: Monday (1) and Tuesday (2)
    // offDays: [1, 2, 3, 4],
    offDays: [2],
};
