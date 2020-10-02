	import React, {Component} from "react";  
	import $ from "jquery";
	class List extends Component {  
	  constructor(){  
	    super();
        this.state = {
            list : [
                {kegiatan: "Menyapu halaman"},
            ],
            kegiatan: "",
            action: "",
        }
      }  
      	bind = (event) => {  
        	  this.setState({[event.target.name]: event.target.value});  	  
        	}   
        	SaveList = (event) =>{  
        	  event.preventDefault();  
        	  let temp = this.state.list;  
        	  
        	  if (this.state.action === "insert") {  
        	    temp.push({  
        	      kegiatan: this.state.kegiatan  
        	    });  
        	  } else if (this.state.action === "update") {   
        	    let index = temp.findIndex(item => item.kegiatan === this.state.kegiatan);  
        	    temp[index].kegiatan = this.state.kegiatan;  
        	  }  
        	  this.setState({list: temp});  
        	}    	  
        	Add = () => {  
        	  this.setState({  
        	    kegiatan: "",  
        	    action: "insert"  
        	  });  
        	}    
        	Drop = (index) => {      	    
        	  let temp = this.state.list;   
        	  temp.splice(index,1);  
        	  this.setState({list: temp});  
        	}  
	  render(){  
	    return (  
            <div className="container">  
            	        { /* generate list */ }  
            	        <ul className="list-group">  
                      {this.state.list.map((item,index) => {  
            	            return (  
            	              <li className="list-group-item" key={index}>  
            	                <h5 className="text-info">{item.kegiatan}</h5>  
            	                <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(index)}>  
                                	Hapus  
                                </button>  
                                </li>  
            	                );  
            	                })}  
            	        </ul>  
            	        <button className="btn btn-sm btn-success m-3" onClick={this.Add}  
            	        data-toggle="modal" data-target="#modal">  
            	          Tambah Data 
            	        </button>  
            	  
                    { /* elemen form modal */ }  
            	        <div className="modal fade" id="modal">  
            	          <div className="modal-dialog">  
            	            <div className="modal-content">  
        	              <div className="modal-header bg-success text-white">  
            	                <h5>TO DO LIST</h5>  
            	              </div>  
            	              <form onSubmit={this.SaveList}>  
                          <div className="modal-body">  
                                input kegiatanmu
            	                <input type="text" name="kegiatan" className="form-control" onChange={this.bind}  
            	                value={this.state.kegiatan} />  
                         </div>  
            	              <div className="modal-footer">  
                            <button type="submit" className="btn btn-primary">  
                              Simpan  
                            </button>  
            	              </div>  
            	              </form>  
                        </div>  
            	          </div>  
            	        </div>  
            	      </div>  
            	    );  
            	  }  
          
	  }  
	
	export default List;  
