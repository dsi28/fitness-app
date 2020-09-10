import React,  { useState, Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
 class Header extends Component{

state = {
	isOpen:  false
}

//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);
 toggleHandler = () => {
	 this.setState({isOpen:!this.state.isOpen})
 }
render (){ 

	return (
		<div>
		  <Navbar color="light" light expand="md">
			<NavbarBrand href="/">FitnessApp</NavbarBrand>
			<NavbarToggler onClick={()=> this.toggleHandler()} />
			<Collapse isOpen={this.state.isOpen} navbar>
			  <Nav className="mr-auto" navbar>
				<NavItem>
				  <NavLink href="/">Home</NavLink>
				</NavItem>
				<NavItem>
				  <NavLink href="/login">Login</NavLink>
				</NavItem>
				<NavItem>
				  <NavLink href="/createworkout">CreateWorkout</NavLink>
				</NavItem>
			  </Nav>
			</Collapse>
		  </Navbar>
		</div>
	  );
}
 
}

export default Header;









// class Header extends Component {
// 	render() {
// 		return (
// 			<>
			
// 				<nav>
// 					<Link to='/'>Home</Link>
// 					<Link to='/login'>Login</Link>
// 					<Link to='/createworkout'> CreateWorkout</Link>
// 				</nav>
			
// 			</>
// 		);
// 	}
// }
// export default Header