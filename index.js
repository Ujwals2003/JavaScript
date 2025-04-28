
    document.querySelector('button').addEventListener('click', function() {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'the well trained and placed after taking the intership from the Xworkz.';
        document.body.appendChild(newParagraph);
    });

    let headClickCount = 0;
        document.querySelector('head').addEventListener('click', () => {
            headClickCount++;
            console.log(`Head tag clicked ${headClickCount} times`);
        });


   