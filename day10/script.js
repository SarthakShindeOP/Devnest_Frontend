
const colors = [
    'aqua',
    'red',
    'chart',
    'green',
    'purple',
    'orange',
    'yellow',
    'dark'
];

const cards = [...document.querySelectorAll('.cube')];
for (let color of colors) {
    const cardAIndex = parseInt(Math.random() * cards.length);
    const cardA = cards[cardAIndex];
    cards.splice(cardAIndex, 1);
    cardA.className += ` ${color}`;
    cardA.setAttribute('data-color', color);

    const cardBIndex = parseInt(Math.random() * cards.length);
    const cardB = cards[cardBIndex];
    cards.splice(cardBIndex, 1);
    cardB.className += ` ${color}`;
    cardB.setAttribute('data-color', color);
}
let clickedCard = null;
let preventClick = false;
let combosFound = 0;

function cardclick(e) {

    
    
    const target = e.currentTarget;

    if (
        preventClick ||
        target === clickedCard ||
        target.className.includes('done')
    ) {
        return;
    }

    target.className = target.className
        .replace('hidden', '')
        .trim();
    target.className += ' done';

    if (!clickedCard) {
        // if we haven't clicked a card, keep track of the card, display it's color
        clickedCard = target;
    } else if (clickedCard) {
        // if we have already clicked a card, check if the new card matches the old card color
        if (
            clickedCard.getAttribute('data-color') !==
            target.getAttribute('data-color')
        ) {
            preventClick = true;
            setTimeout(() => {
                clickedCard.className =
                    clickedCard.className.replace('done', '').trim() +
                    ' hidden';
                target.className =
                    target.className.replace('done', '').trim() +
                    ' hidden';
                clickedCard = null;
                preventClick = false;
            }, 500);
        } else {
            combosFound++;
            clickedCard = null;
            if (combosFound === 8) {
                var btn=document.getElementsByClassName("btn");
                btn[0].style.visibility="visible";
                alert('YOU WIN');
            }
        }
    }
}

function restart(){
    location.reload()
}