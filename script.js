// تاريخ بداية رمضان (يمكنك تعديله حسب السنة القادمة)
const ramadanStartDate = new Date("2024-03-10T00:00:00"); // مثال لتاريخ بداية رمضان

function updateCountdown() {
    const now = new Date();
    const timeDifference = ramadanStartDate - now;

    const days = Math.floor(timeDifference /