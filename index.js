var paragraphs = [
    "Artificial intelligence (AI) is revolutionizing healthcare by enhancing diagnostic accuracy, treatment effectiveness, and patient care. Machine learning algorithms analyze vast amounts of medical data to identify patterns and predict patient outcomes. In diagnostics, AI-powered tools assist physicians in interpreting medical images, such as X-rays and MRI scans, leading to earlier detection of diseases like cancer and faster treatment decisions. Moreover, AI-enabled virtual health assistants provide personalized recommendations, reminders, and support for chronic disease management, improving patient engagement and adherence to treatment plans. As AI continues to evolve, its integration into healthcare workflows promises to streamline administrative tasks, optimize resource allocation, and ultimately, improve healthcare delivery and outcomes for patients worldwide.",
    "Renewable energy technologies offer sustainable solutions to mitigate climate change and reduce reliance on fossil fuels. Solar power harnesses the sun's energy through photovoltaic cells, converting sunlight into electricity for residential, commercial, and industrial applications. Wind turbines capture kinetic energy from the wind, generating clean electricity that powers homes and businesses. Additionally, hydroelectric power utilizes the force of flowing water to produce renewable energy, with large-scale dams providing electricity to entire regions. Biomass energy derives from organic materials like agricultural waste and forestry residues, which are converted into biofuels or burned to generate heat and electricity. Advancements in energy storage systems, such as batteries and hydrogen fuel cells, complement these renewable sources, enabling grid stability and integration of intermittent renewables into the energy mix.",
    "In the digital age, cybersecurity plays a critical role in safeguarding sensitive information, securing online transactions, and protecting individuals and organizations from cyber threats. With the proliferation of connected devices and the internet of things (IoT), ensuring robust cybersecurity measures is paramount to prevent unauthorized access, data breaches, and cyber attacks. Encryption technologies scramble data to make it unreadable to unauthorized users, safeguarding it during transmission and storage. Multi-factor authentication adds an extra layer of security by requiring users to provide multiple forms of verification, such as passwords, biometrics, or security tokens. Furthermore, regular security audits and penetration testing help identify vulnerabilities in systems and networks, allowing organizations to patch them before they can be exploited by malicious actors.",
    "The future of transportation is characterized by innovation, sustainability, and efficiency, driven by advancements in technology and changing consumer preferences. Electric vehicles (EVs) are gaining popularity as a clean and environmentally friendly alternative to traditional gasoline-powered cars, offering zero-emission transportation and lower operating costs. Autonomous vehicles (AVs) equipped with sensors, cameras, and artificial intelligence are poised to revolutionize the way people and goods are transported, with potential benefits including improved safety, reduced traffic congestion, and increased mobility for seniors and people with disabilities. Moreover, high-speed rail networks and hyperloop systems promise faster, more efficient long-distance travel, connecting cities and regions while minimizing environmental impact. As urbanization and population growth continue, the need for sustainable and accessible transportation solutions will drive innovation and investment in the transportation sector.",
    "Mental health awareness is crucial for promoting well-being, reducing stigma, and ensuring access to support and resources for individuals facing mental health challenges. Education and advocacy initiatives raise awareness about common mental health conditions, such as depression, anxiety, and bipolar disorder, fostering understanding and empathy within communities. Early intervention and treatment can prevent the escalation of mental health issues, improving outcomes and quality of life for those affected. Additionally, destigmatizing conversations about mental health encourages open dialogue and empowers individuals to seek help without fear of judgment or discrimination. Supportive environments in schools, workplaces, and healthcare settings promote mental wellness and resilience, emphasizing self-care practices, stress management techniques, and healthy coping strategies. By prioritizing mental health awareness and support, we can create a more compassionate and inclusive society where everyone has the opportunity to thrive."
];
var countDown = 60;
var startTime;
var typedText = "";
var counter = 0;
var targetText = "";
var elapsedTime;
var timerInterval;
var fiveCharacters = 5;

$("#text-area").on("input", function() {
    if (!startTime) {
        startTime = new Date();
        timerInterval = setInterval(intervalTimer, 1000);
    }

    typedText = $("#text-area").val();
    counter = typedText.length;
    $("#counter").text("You typed " + counter + " characters");

    var accuracy = accuracyCheck(typedText,targetText);
    $("#accuracy").text("Your current accuracy is " + accuracy.toFixed(2) + "%");

    visualFeedBack(typedText, targetText);
});

function calculateResult() {
    var minute = 1;
    var totalTypedCharacters = typedText.length;
    var wpm = Math.floor((totalTypedCharacters / fiveCharacters) / minute);
    var accuracy = accuracyCheck(typedText, targetText);

    alert("You type with a speed of " + wpm.toFixed(2) + " WPM with accuracy of " + accuracy.toFixed(2) + "%");
    resetAll();
}

function visualFeedBack(typedText, targetText) {
    var highlightedText = '';
    for (i = 0; i < targetText.length; i++) {
        if (typedText[i] === targetText[i]) {
           highlightedText += '<span class="match">' + targetText[i] + '</span>';
        } else {
            highlightedText += '<span>' + targetText[i] + '</span>';
    }
    $("#random-paragraph").html(highlightedText);
}
}

function accuracyCheck(typedText, targetText) {
    var correctLetters = 0;
    for (i = 0; i < typedText.length; i++) {
        if (typedText[i] === targetText[i]) {
            correctLetters++;
        }
    }
    return correctLetters / typedText.length * 100;
}

function intervalTimer() {
    countDown--;
    if (countDown >= 0) {
        $("#timer").text("You have left " + countDown + " seconds");
    } else {
        calculateResult();
    }
}

function generateParagraph() {
    var randomIndexNumber = Math.floor(Math.random() * paragraphs.length);
    targetText = paragraphs[randomIndexNumber];
    $("#random-paragraph").text(targetText);
}

$(document).ready(function() {
    generateParagraph();
});

function resetAll() {
    $("#text-area").val('');

    clearInterval(timerInterval);
    startTime = null;
    $("#timer").text("You have left 60 seconds");
    $("#accuracy").text("Your current accuracy is 0%");

    counter = 0;
    $("#counter").text("You typed 0 characters");

    generateParagraph();
}






