function update() {
    var s = document.getElementsByName("type");
    var amount = document.getElementById("amount").value;
    var select = s[0];
    var price = 0;
    var prices = getPrices();
    var index = parseInt(select.value) - 1;

    if (index >= 0) {
      price = prices.types[index];
    }

    var hero = document.getElementById("cheroes");
    hero.style.display = (select.value == "2" ? "block" : "none");
    var cheroes = document.getElementsByName("options");
    cheroes.forEach(function(radio) {
      if (radio.checked) {
        var optionPrice = prices.options[radio.value];
        if (optionPrice !== undefined) {
          price += optionPrice;
        }
      }
    });

    var role = document.getElementById("role");
    role.style.display = (select.value == "3" ? "block" : "none");
    var roles = document.querySelectorAll("#role input");
    roles.forEach(function(checkbox) {
      if (checkbox.checked) {
        var propPrice = prices.properties[checkbox.name];
        if (propPrice !== undefined) {
          price += propPrice;
        }
      }
    });
    var price2 = document.getElementById("price");
    price2.innerHTML = "Итоговая цена: " + price*amount + " RUB";
  }
  
  function getPrices() {
    return {
      types: [3, 4, 5],

      options: {
        option1: 1,
        option2: 2,
        option3: 3,
      },

      properties: {
        Core: 1,
        Sup: 2,
      }

    };
  }
  
  window.addEventListener('DOMContentLoaded', function (event) {
    var hero = document.getElementById("cheroes");
    hero.style.display = "none";
    var number = document.getElementById('amount');
    number.addEventListener("change", function(event) {
      update();
    });

    var s = document.getElementsByName("type");
    var select = s[0];
    select.addEventListener("change", function(event) {
      update();
    });
    var cheroes = document.getElementsByName("options");
    cheroes.forEach(function(radio) {
      radio.addEventListener("change", function(event) {
        update();
      });
    });
    var roles= document.querySelectorAll("#role input");
    roles.forEach(function(checkbox) {
      checkbox.addEventListener("change", function(event) {
        update();
      });
    });
  
    update();
  });
  
