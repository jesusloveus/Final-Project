function countdown ( number )
{
    const intervalId = setInterval( () =>
    {
        if ( number > 0 )
        {
            console.log( number );
            number--;
        } else
        {
            console.log( "DONE!" );
            clearInterval( intervalId );
        }
    }, 1000 );
}

function countDown ( time )
{
    let timer = setInterval( function ()
    {
        time--;
        if ( time <= 0 )
        {
            clearInterval( timer );
            console.log( 'DONE!' );
        }
        else
        {
            console.log( time );
        }

    }, 1000 );
}

function randomGame ()
{
    let num;
    let times = 0;
    let timer = setInterval( function ()
    {
        num = Math.random();
        times++;
        if ( num > .75 )
        {
            clearInterval( timer );
            console.log( "It took " + times + " try/tries." );
        }
    }, 1000 );


}

const h1 = document.querySelector( 'h1' );




<h1>Giant Sequoia</h1>;
h1.innerText;
"Giant Sequoia";