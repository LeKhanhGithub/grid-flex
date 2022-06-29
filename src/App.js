import './App.css'

function App() {
  return (
    <>
    {/* use flex */}
    <div className="box">
        <div className="box-big1">box bog 1</div>
        <div className="box-big2">
          <div className="big2-child1"> big2 child</div>
          <div className="big2-child2">
            <div className = "child1">child1.1</div>
            <div className = 'child2'>
              <div className = "lastchild1" >1</div>
              <div className = "lastchild2">2</div>
            
            </div>
          </div>
        </div>
    </div>

{/* use grid */}

    <div className = "box2">
      <div className = "hoa1">1</div>
      <div className = "hoa2">2</div>
      <div className = "hoa3">3</div>
      <div className = "hoa4">4</div>
      <div className = "hoa5">5</div>
    </div>
    </>
  );
}

export default App;
