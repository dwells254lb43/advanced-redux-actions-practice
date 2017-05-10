import {connect} from "react-redux";
import {addUser} from "../actions";
import {removeUser} from "../actions";
import UserButtons from "../components/UserButtons";


function mapDispatchToProps(dispatch){
  return {
    add:function(user){
      let action = addUser(user);
      dispatch(action);
    },
    decrease:function(){
      let action = removeUser();
      dispatch(action);
    }
  }
}


const UserButtonsContainer = connect(mapDispatchToProps)(UserButtons);


export default UserButtonsContainer