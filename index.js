<script>
    function slideLeft() {
      document.getElementById('slider').scrollBy({
        left: -220,
        behavior: 'smooth'
      });
    }

    function slideRight() {
      document.getElementById('slider').scrollBy({
        left: 220,
        behavior: 'smooth'
      });
    }

    const ans = document.getElementById("plusicon").addEventListener("click", function () {
      const answer = document.querySelector(".answer");
      if (answer.style.display === "block")
        answer.style.display = "none";
      else
        answer.style.display = "block";
    })

    const ans2 = document.getElementById("plusicon2").addEventListener("click", function () {
      const answer = document.querySelector(".answer2");
      if (answer2.style.display === "block")
        answer2.style.display = "none";
      else
        answer2.style.display = "block";
    })

    const ans3 = document.getElementById("plusicon3").addEventListener("click", function () {
      const answer = document.querySelector(".answer3");
      if (answer3.style.display === "block")
        answer3.style.display = "none";
      else
        answer3.style.display = "block";
    })
    const ans4 = document.getElementById("plusicon4").addEventListener("click", function () {
      const answer = document.querySelector(".answer4");
      if (answer4.style.display === "block")
        answer4.style.display = "none";
      else
        answer4.style.display = "block";
    })
    const ans5 = document.getElementById("plusicon5").addEventListener("click", function () {
      const answer = document.querySelector(".answer5");
      if (answer5.style.display === "block")
        answer5.style.display = "none";
      else
        answer5.style.display = "block";
    })
    const ans6 = document.getElementById("plusicon6").addEventListener("click", function () {
      const answer = document.querySelector(".answer6");
      if (answer6.style.display === "block")
        answer6.style.display = "none";
      else
        answer6.style.display = "block";
    })

    const det = document.getElementById("img1").addEventListener("click", function () {
      const pop = document.querySelector(".pop-up");
      const img2 = document.getElementById("pop-img");
      const dec = document.querySelector(".dec");
      document.getElementById('pop-btn').href = 'https://youtu.be/e5slJJ1InP4?si=5XMLqu7X7ExwdtFv';
      pop.style.display = "block";
      img2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNPILykfF7qI4fpI-U6U68BLGS7JOeyhNrYA&s";
      dec.innerHTML = "After several years in prison, a former gangster seeks a quiet life with his family. But when his son winds up in jail, he must return to his old ways.";
      const wrongicon = document.getElementById("wrongicon").addEventListener("click", function () {
        const pop = document.querySelector(".pop-up");
        pop.style.display = "none";

      })
      const sec = document.getElementById("img2").addEventListener("click", function () {
            const pop1 = document.getElementById("pop-img");
        const pop = document.querySelector(".pop-up");
        const img2 = document.getElementById("pop-img");
        const wrongicon = document.getElementById("wrongicon");
        const dec = document.querySelector(".dec");
        document.getElementById('pop-btn').href = 'https://youtu.be/II6G7UrvAD8?si=IdJSYjqgdkfdgbbY';
        pop.style.display = "block";
        img2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXP7pzJiFLsokAPWG6ThoZYBhLqMNW_pYQ&s";
        dec.innerHTML = "After the death of his father, warrior-king Sambhaji Maharaj battles Mughal <br> forces led by Aurangzeb to keep the Maratha Empire alive.";
      })
      const img3 = document.getElementById("img3").addEventListener("click", function () {
        const img2 = document.getElementById("pop-img");
        pop.style.display = "block";
        const dec = document.querySelector(".dec");
        document.getElementById('pop-btn').href = 'https://youtu.be/LtLGL1JfSD0?si=AJ8joctFy_UlGJxT';
        img2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnM_MoG0BCGLYIUwIhdCaR6jJlwfiT0K38RQ&s";
        dec.innerHTML = "When charming Prince Aviraaj meets Sophia, a self-made girl boss, the worlds of royalty and startups collide in a whirlwind of romance and ambition.";
      })

      const img4 = document.getElementById("img4").addEventListener("click", function () {
        const img2 = document.getElementById("pop-img");
        pop.style.display = "block";
        const dec = document.querySelector(".dec");
                document.getElementById('pop-btn').href = 'https://youtu.be/SJVOvKyWo4g?si=en6nq1xsazWVy1dm';
        img2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Y7B50azX5iLISrz8VLx1ZQ6dyRaK4UlUqw&s";
        dec.innerHTML = "As his smuggling empire grows, a brazen Pushpa longs for power and respect on his vengeful journey, while facing old rivals and new.";
      })


    });

 </script>
