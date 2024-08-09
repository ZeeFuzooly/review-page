$(document).ready(function () {
  const ratings = ['BAD', 'UGH', 'OK', 'GOOD'];
  const icons = ['fa-frown', 'fa-meh', 'fa-smile', 'fa-laugh'];
  const colors = ['#ff4b4f', '#ff9900', '#3399ff', '#33e6c1'];
  
  $("#slider2").roundSlider({
      sliderType: "min-range",
      circleShape: "pie",
      startAngle: "315",
      lineCap: "round",
      radius: 130,
      width: 50,
      min: 0,
      max: 3,
      startValue: 0,
      svgMode: true,
      pathColor: "#eee",
      borderWidth: 0,
      rangeColor: colors[0],
      valueChange: function (e) {
          const index = e.value;
          const faceIcon = document.querySelector('.feedback-face i');
          const ratingText = document.getElementById('rating');
          const submitButton = document.getElementById('submit');

          faceIcon.className = `fas ${icons[index]}`;
          faceIcon.style.color = colors[index];
          ratingText.textContent = ratings[index];
          ratingText.style.color = colors[index];
          submitButton.style.backgroundColor = colors[index];

          // Update the slider's color range based on the current value
          updateSliderColors(index);
      }
  });

  function updateSliderColors(index) {
      const colorSegments = ['#ff4b4f', '#ff9900', '#3399ff', '#33e6c1'];
      $("#slider2").roundSlider("option", "rangeColor", colorSegments[index]);
  }

  var sliderObj = $("#slider2").data("roundSlider");
  sliderObj.setValue(0);

  // Function to update the time every second
  function updateTime() {
      const timeElement = document.getElementById('time');
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      timeElement.textContent = `${hours}:${minutes}`;
  }

  // Initialize time display and set interval to update every second
  updateTime();
  setInterval(updateTime, 1000);

  // Show a popup when the submit button is clicked
  $('#submit').click(function() {
      $('#popup').addClass('show');
      setTimeout(() => $('#popup').removeClass('show'), 2000); // Hide popup after 2 seconds
  });
});
