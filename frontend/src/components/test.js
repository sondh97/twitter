import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostDetail from '../container/postDetail';
class Test extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: props.user
		}
	}
    render() { 
		const { user } = this.state;
            return ( 

					<div className="" style={{marginLeft:10}}>
					{/* left panel  */}
					<div className="row mt-0">
						<div className="col-3"></div>
						<div className="col-6">
							<div className="row">
								<div className="col-2 text-center font-weight-bold">Tweet</div>
								<div className="col-2 text-center font-weight-bold">Following</div>
								<div className="col-2 text-center font-weight-bold">Follower</div>
								<div className="col-2 text-center font-weight-bold">Favorite</div>
								<div className="col-2 text-center font-weight-bold">List</div>
								<div className="col-2 text-center font-weight-bold">Moment</div>
							</div>
							<div className="row">
								<div className="col-2 text-center font-weight-bold text-success">{user.tweet.number} </div>
								<div className="col-2 text-center font-weight-bold text-success">{user.tweet.following}</div>
								<div className="col-2 text-center font-weight-bold text-success">{user.tweet.follower}</div>
								<div className="col-2 text-center font-weight-bold text-success">{user.tweet.favorite}</div>
								<div className="col-2 text-center font-weight-bold text-success">{user.tweet.list}</div>
								<div className="col-2 text-center font-weight-bold text-success">{user.tweet.moment}</div>
							</div>

							
							
						</div>
						<div className="col-3">
							<div className="float-left">
								<Link to="/user/edit"><button className="border-customize btn btn-outline-danger font-weight-bold" style={{ width: "146px" }} >Edit Profile</button></Link>
							</div>
						</div>
					</div>
					{/*  */}

					{/*  start Heading */}
			<div className="row">
				<div className="col-sm-2">
					<div className="panel panel-default">
						<div className="panel-body">
							<span style={{display: 'table',margin: '0 auto'}} ><img className="rounded-circle" alt={user.username} src="images/chalee.jpg" style={{width:100 , height:100}}></img>
							<p  style={{textAlign: 'center' , fontWeight: 'bold'}}>{user.username}</p>
							
							</span>
							<div className="row">
									<div className="col-3 text-center font-weight-bold">Tweet</div>
									<div className="col-5 text-center font-weight-bold">Following</div>
									<div className="col-4 text-center font-weight-bold">Follower</div>
								</div>
								<div className="row">
									<div className="col-3 text-center font-weight-bold text-success">{user.tweet.number} </div>
									<div className="col-5 text-center font-weight-bold text-success">{user.tweet.following}</div>
									<div className="col-4 text-center font-weight-bold text-success">{user.tweet.follower}</div>
								</div>
						</div>
					</div>

					<div className="panel panel-default panel-custom">
						<div className="panel-heading">
							<h3 style={{textAlign:"center"}} className="panel-title">
								Trends
							</h3>
						</div>

						<div className="panel-body">
							<ul className="list-unstyled">
								<li><a href="#">#Cras justo odio</a></li>
							</ul>
						</div>
					</div>

					
				</div>
				<div className="row col-sm-10">
							
							<div class="card col-sm-4" >
								<img class="card-img-top" src="..." alt="Card image cap"></img>
								<div class="card-body">
									<h5 class="card-title">Card title</h5>
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a href="#" class="btn btn-primary">Go somewhere</a>
								</div>
							</div>
							<div class="card col-sm-4" >
								<img class="card-img-top" src="..." alt="Card image cap"></img>
								<div class="card-body">
									<h5 class="card-title">Card title</h5>
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a href="#" class="btn btn-primary">Go somewhere</a>
								</div>
							</div>
							<div class="card col-sm-4" >
								<img class="card-img-top" src="..." alt="Card image cap"></img>
								<div class="card-body">
									<h5 class="card-title">Card title</h5>
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a href="#" class="btn btn-primary">Go somewhere</a>
								</div>
							</div>

						</div>
				
			</div>
			{/* End Heading */}
			
			



		</div>



             );
    }
}
 
export default Test;