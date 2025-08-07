
export default function Stats({ items }) {
  if (!items.length) 
    return ( 
    <p className="stats"> 
      <em> 
        Start adding some items to your packing list :)
      </em>
    </p>
    );

  const nbItems = items.length;
  const nbOfPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((nbOfPacked / nbItems) * 100);

  return (
    <footer className="stats">
     <em> 
      {percentage === 100 ? 'You got everything! Ready to go' :
         `💼 You have ${nbItems} items on your list, and you already packed ${nbOfPacked} (${percentage}%)` }
    </em>
    </footer>
  )
}