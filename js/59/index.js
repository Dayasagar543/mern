document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  //input and search
  let user_input = document.getElementById("user_input");
  let button = document.getElementById("Search");

  //piecharts
  let stats_container = document.querySelector(".stats_container");
  let easy_progress = document.querySelector(".easy_progress_item");
  let easy_progress_label = document.getElementById("easy_label");
  let medium_progress = document.querySelector(".medium_progress_item");
  let medium_progress_label = document.getElementById("medium_label");
  let hard_progress = document.querySelector(".hard_progress_item");
  let hard_progress_label = document.getElementById("hard_label");

  //cards container
  let stats_card_container = document.querySelector(".stats_card");

  //validation
  const validation = (user_input) => {
    if (user_input.trim() === "") {
      alert("user name is empty");
      return false;
    }

    const regex = /^[a-zA-Z0-9](?:[a-zA-Z0-9-_]{1,14}[a-zA-Z0-9])?$/;

    const isMatching = regex.test(user_input);
    if (!isMatching) {
      alert("Invalid username");
    }
    return isMatching;
  };

  const Update_progress = (solved, total, label, circle) => {
    const progressDegree = (solved / total) * 100;
    circle.style.setProperty("--progress_degree", `${progressDegree}%`);
    label.textContent = `${solved}/${total}`;
  };
  const display_userdata = (Parseddata) => {
    let data = Parseddata;
    console.log(data);
    let total_questions = Parseddata.totalQuestions;
    let total_solved = Parseddata.totalSolved;
    let total_easy = Parseddata.totalEasy;
    let total_easy_solved = Parseddata.easySolved;
    let total_medium = Parseddata.totalMedium;
    let total_medium_solved = Parseddata.mediumSolved;
    let total_hard = Parseddata.totalHard;
    let total_hard_solved = Parseddata.hardSolved;

    Update_progress(
      total_easy_solved,
      total_easy,
      easy_progress_label,
      easy_progress
    );
    Update_progress(
      total_medium_solved,
      total_medium,
      medium_progress_label,
      medium_progress
    );
    Update_progress(
      total_hard_solved,
      total_hard,
      hard_progress_label,
      hard_progress
    );
  };

  const Fetch_data = async (user_name) => {
    const url = `https://leetcode-stats-api.herokuapp.com/${user_name}`;
    try {
      button.textContent = "searching ...";
      button.disabled = true;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("unable to fetch the user data or contact the server");
      }
      const Parseddata = await response.json();
      //   console.log(data);
      display_userdata(Parseddata);
    } catch (error) {
      stats_container.innerHTML = `<p>${error.message}</p>`;
    } finally {
      button.textContent = "search";
      button.disabled = false;
    }
  };
  //button functionality
  button.addEventListener("click", (e) => {
    e.preventDefault();
    let user_name = user_input.value;
    // console.log(user_name);
    if (validation(user_name)) {
      Fetch_data(user_name);
    }
  });
});
