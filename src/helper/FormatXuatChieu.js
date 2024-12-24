const formatShowtimeData = (giochieu, phut) => {
    const startTime = new Date(giochieu);
    const endTime = new Date(startTime.getTime() + phut * 60000); // Cộng thêm thời lượng phim (phút)

    const options = { hour: '2-digit', minute: '2-digit' };
    const startFormatted = startTime.toLocaleTimeString('vi-VN', options).replace('.', ':');
    const endFormatted = endTime.toLocaleTimeString('vi-VN', options).replace('.', ':');

    // const today = new Date();
    // const isToday = startTime.toDateString() === today.toDateString();
    // const dateFormatted = isToday
    //     ? 'Hôm nay'
    //     : `${startTime.getDate().toString().padStart(2, '0')}/${(startTime.getMonth() + 1).toString().padStart(2, '0')}`;

    // const type = subtitleType.name || '';
    // const room = hall.name; // Thay bằng thông tin phòng chiếu từ dữ liệu nếu có

    return `${startFormatted} ~ ${endFormatted} `;
};

export default formatShowtimeData;