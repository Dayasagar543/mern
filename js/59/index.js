document.addEventListener("DOMContentLoaded", () => {
  //input and search
  let user_input = document.getElementById("user_input");
  let button = document.getElementById("Search");

  //piecharts
  let stats_container = document.querySelector("stats_container");
  let easy_progress = document.querySelector(".easy_progress_item");
  let medium_progress = document.querySelector(".medium_progress_item");
  let hard_progress = document.querySelector(".hard_progress_item");
  let easy_progress_label = document.getElementById("easy_label");
  let medium_progress_label = document.getElementById("medium_label");
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

  const display_userdata = (Parseddata) => {
    console.log(Parseddata)
    // const totalHard_questions=Parseddata.
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
      stats_container.innerHTML = `<p>No data found !</p>`;
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
