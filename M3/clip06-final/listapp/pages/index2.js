export default function Home() {
  
  function ListItems({ints}) {

    return (
      <>
        {ints.map(id => {
          return (
            <li key={id}>{id}</li>
          )
        })}
      </>
    )
  }

  const ints = [1,2,3]
  
  return (
    <ul>
      <ListItems ints={ints} />
    </ul>
  );
}

/*

V = function ( {state} )     view a function of application state

proper based component API


describe what component look like from inside component

react believe that everything that has to do with rendering a view (state, ui, javascript)

jsx combines power expressiventess of javascript, with readability of html

f(g(x))







 */
