import { useEffect } from 'react';
import './App.css'

function App() {

  useEffect(() => {

  const scrollers = document.getElementsByClassName('scroller');

  const scrollerDivs = Array.prototype.filter.call(scrollers, function(testElement) {
    return testElement.nodeName === 'DIV';
  });
  
  function scrollAll(scrollLeft) {
    scrollerDivs.forEach(function(element) {
      element.scrollLeft = scrollLeft;
    });
  }
  
  scrollerDivs.forEach(function(element) {
    element.addEventListener('scroll', function(e) {
      scrollAll(e.target.scrollLeft);
    });
  });
  }, [])



  return (
      <div >
        <div class="scroller">
          <div >
            <table >
              <tr>
                <td> content content </td>
                <td> content content </td>
                <td> content content </td>
                <td> content content </td>
                <td> content content </td>
                <td> content content </td>
                <td> content content </td>
                <td> content content </td>
                <td> content content </td>
                <td> etc... </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="scroller">
          <div >
            <table >
              <tr>
                <td> content2 content2 </td>
                <td> content2 content2 </td>
                <td> content2 content2 </td>
                <td> content2 content2 </td>
                <td> content2 content2 </td>
                <td> content2 content2 </td>
                <td> content2 content2 </td>
                <td> content2 content2 </td>
                <td> content2 content2 </td>
                <td> etc... </td>
              </tr>
           
  
            </table>
          </div>
        </div>
        <div class="scroller">
          <div >
            <table >
              <tr>
                <td> content3 content3 </td>
                <td> content3 content3 </td>
                <td> content3 content3 </td>
                <td> content3 content3 </td>
                <td> content3 content3 </td>
                <td> content3 content3 </td>
                <td> content3 content3 </td>
                <td> content3 content3 </td>
                <td> content3 content3 </td>
                <td> etc... </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
   
  );
}

export default App;
