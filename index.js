// Import stylesheets
import './style.css';

// Write Javascript code!
$(function () {
        $("#ddlFruits").change(function () {
            var selectedText = $(this).find("option:selected").text();
            var selectedValue = $(this).val();
            alert("Selected Text: " + selectedText + " Value: " + selectedValue);
        });
    });

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;