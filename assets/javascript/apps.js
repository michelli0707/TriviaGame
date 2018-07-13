var panel = $("#quiz-area");

var questions = [{
    question: "Which country has won the most world cups?",
    answers: ["Brazil", "Italy", "Germany", "France"],
    correctAnswer: "Brazil"
  }, {
    question: "Which country has won the most women's world cup?",
    answers: ["USA", "Brazil", "Japan", "Sweden"],
    correctAnswer: "USA"
  }, {
    question: "Which country has the highest GDP per capita in the world?",
    answers: ["Luxembourg", "Germany", "China", "Japan"],
    correctAnswer: "Luxembourg"
  }, {
    question: "Top 3 richest people in the world in 2018:",
    answers: ["Jeff Bezos USA, Bill Gates USA, Warren Buffett USA", "Jeff Bezos USA, Bill Gates USA, Michael Bloomberg USA", "Mark Zuckerberg USA, Amancio Ortega Spain, Carlos Slim Mexico", "Bernard Arnault France, Amancio Ortega Spain, Carlos Slim Mexico"],
    correctAnswer: "Jeff Bezos USA, Bill Gates USA, Warren Buffett USA"
  }, {
    question: "Since what year the USA has been a member of NATO?",
    answers: ["1935", "1977", "1949", "2008"],
    correctAnswer: "1949"
  }, {
    question: "Which country is the largest holder of US Treasuries?",
    answers: ["China", "Japan", "Germany", "UK"],
    correctAnswer: "China"
  }, {
    question: "Which company is the largest in the world by market value in 2018 (in billion U.S. dollars)?",
    answers: ["Amazon.com", "Apple", "Microsoft", "Alphabet"],
    correctAnswer: "Apple"
  }, {
    question: "What year was the Bretton Woods Agreement established?",
    answers: ["1949", "1951", "1944", "1935"],
    correctAnswer: "1944"
  }];
  
  var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>You did it!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
