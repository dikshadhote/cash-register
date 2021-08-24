let billAmount=document.querySelector('#bill-amount');
let cashGiven=document.querySelector('#cash-given');
let checkButton=document.querySelector('#btn-check');

let noOfNotesRow=document.querySelectorAll('.no-of-notes')
let message=document.getElementById('message');


checkButton.addEventListener("click",showMessage);

let notesAvailable=[2000,500,100,20,10,5,1]


function calculateChange(cash,bill)
{
    let cashToBeReturned=cash-bill;
 
    let noOfNotes=[];
    for(let i=0;i<notesAvailable.length;i++)
    {
        noOfNotes[i]=Math.trunc(cashToBeReturned/notesAvailable[i]);
       
        cashToBeReturned=cashToBeReturned%notesAvailable[i];
    }

    return noOfNotes;
}

function showMessage()
{
    let bill=parseInt(billAmount.value);
    let cash=parseInt(cashGiven.value);
    if(cash>bill)
    {
       let noOfnotes=calculateChange(cash,bill)
    
       displayNoOfNotes(noOfnotes);
       message.style.display="none";
       
    }
    else if(cash==bill)
    {
        message.innerText="Cash given is equal to bill.No value to be returned!"
        message.style.backgroundColor="aqua";
    }

    else
    {
        message.style.backgroundColor="orange";
        message.innerText="Please give valid cash amount"
    }
   
}

function displayNoOfNotes(noOfNotes)
{
    for(let i=0;i<noOfNotes.length;i++)
    {
        noOfNotesRow[i].innerText=noOfNotes[i];
        noOfNotesRow[i].style.backgroundColor="aqua"
    }
    
    
}