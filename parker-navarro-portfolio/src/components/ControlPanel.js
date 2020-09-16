import React from 'react';

class ControlPanel extends React.Component{
    static propTypes = {
       
      };
    
      state = {
        uid: null,
        owner: null,
      }


      render(){
          return(
              <div id="control-panel">
                    <label for="fish-edit" className="panel-header">Control Panel</label>
                    <form className="fish-edit" onSubmit={this.createFish}>  
                    <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
                    <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
                    <select name="status" ref={this.statusRef}> 
                        <option value="available">Fresh!</option>
                        <option value="unavailable">Sold Out!</option>
                     </select>
      
                    <textarea name="desc" ref={this.descRef} placeholder="Description"/>
                    <input name="image" ref={this.imageRef} type="text" placeholder="Image"/>
                    <button type="submit">+ Add Text</button>
          </form>

              </div>
          )
      }

}
    
export default ControlPanel;