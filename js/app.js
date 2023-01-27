
const showSelected = (e) => {
    // console.log(e.target.getAttribute("data-showtime"));
    const showTime = e.target.getAttribute("data-showtime");
    if (showTime === "soldout" || showTime === null){return}

    // console.log("got here here");

    const showDate = e.target.getAttribute("data-showdate");

    localStorage.setItem('showTime', showTime);
    localStorage.setItem('showDate', showDate);


}

document.querySelector("#showtimes").addEventListener("click", showSelected);