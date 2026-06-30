document.addEventListener("DOMContentLoaded", function() {
    
    // ฟังก์ชันจัดการนาฬิกา Real-time
    function updateClock() {
        const now = new Date();
        
        // รูปแบบเวลา HH:MM:SS
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        
        // รูปแบบวันที่ DD/MM/YYYY
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        const dateString = `${day}/${month}/${year}`;

        // นำไปแสดงผลใน HTML
        const clockElement = document.getElementById('real-time-clock');
        const dateElement = document.getElementById('real-time-date');
        
        if(clockElement) clockElement.textContent = timeString;
        if(dateElement) dateElement.textContent = `อัปเดตล่าสุด: ${dateString}`;
    }

    // สั่งให้นาฬิกาเดินทุกๆ 1 วินาที
    setInterval(updateClock, 1000);
    updateClock(); // เรียกใช้งานทันทีเมื่อโหลดหน้าเว็บ
    
});
