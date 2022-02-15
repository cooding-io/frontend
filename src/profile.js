import logo from './logo.svg';
import { Button } from '@nextui-org/react';
import Checkbox from '@mui/material/Checkbox';


import './App.css';



function Profile() {
  return (
    <div className="App">
      
      <div className="container-full">
        {/* Content Header (Page header) */}	  
        <div className="content-header">
          <div className="d-flex align-items-center">
            <div className="me-auto">
              <h3 className="page-title">Profile</h3>
              <div className="d-inline-block align-items-center">
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#"><i className="mdi mdi-home-outline" /></a></li>
                    <li className="breadcrumb-item" aria-current="page">Extra</li>
                    <li className="breadcrumb-item active" aria-current="page">Profile</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="card text-center">
                <div className="card-body">
                  <img src="/app/images/avatar/avatar-13.png" className="bg-light w-100 h-100 rounded-circle avatar-lg img-thumbnail" alt="profile-image" />
                  <h4 className="mb-0 mt-2">Nil Yeager</h4>
                  <p className="text-muted fs-14">Project Manager</p>
                  <button type="button" className="btn btn-primary btn-sm mb-2">Follow</button>
                  <button type="button" className="btn btn-light btn-sm mb-2">Message</button>
                  <div className="text-start mt-3">
                    <p className="header-title mb-2"><strong>About Me :</strong></p>
                    <p className="text-muted  mb-3">
                      Hi I'm Johnathn Deo,has been the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type.
                      
                    </p>
    


                    <p className="text-muted mb-2 "><strong className="text-dark">Full Name :</strong> <span className="ms-2">Johen M. Doe</span></p>
                    <p className="text-muted mb-2 "><strong className="text-dark">Mobile :</strong><span className="ms-2">(123)123 1234</span></p>
                    <p className="text-muted mb-2 "><strong className="text-dark">Email :</strong> <span className="ms-2 ">user@email.domain</span></p>
                    <p className="text-muted mb-1 "><strong className="text-dark">Location :</strong> <span className="ms-2">USA</span></p>
                  </div>
                  <ul className="social-list list-inline mt-3 mb-0">
                    <li className="list-inline-item">
                      <a href="javascript: void(0);" className="waves-effect waves-circle btn btn-social-icon btn-circle btn-facebook-light"><i className="fa fa-facebook" /></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript: void(0);" className="waves-effect waves-circle btn btn-social-icon btn-circle btn-twitter-light"><i className="fa fa-twitter" /></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript: void(0);" className="waves-effect waves-circle btn btn-social-icon btn-circle btn-google-light"><i className="fa fa-google" /></a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript: void(0);" className="waves-effect waves-circle btn btn-social-icon btn-circle btn-instagram-light"><i className="fa fa-instagram" /></a>
                    </li>
                  </ul>
                </div> {/* end card-body */}
              </div> {/* end card */}
              {/* Messages*/}
              <div className="card">
                <div className="card-body">
                  <div className="dropdown float-end">
                    <a href="#" className="dropdown-toggle no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="mdi mdi-dots-vertical" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      {/* item*/}
                      <a href="javascript:void(0);" className="dropdown-item">Settings</a>
                      {/* item*/}
                      <a href="javascript:void(0);" className="dropdown-item">Action</a>
                    </div>
                  </div>
                  <h4 className="header-title mb-3">Contact</h4>
                  <div>
                    <div className="d-flex align-items-center mb-30">
                      <div className="me-15">
                        <img src="/app/images/avatar/avatar-1.png" className="bg-primary-light avatar avatar-lg rounded-circle" alt="" />
                      </div>
                      <div className="d-flex flex-column flex-grow-1">
                        <a href="#" className="text-dark hover-primary mb-1 fs-16">Sophia</a>
                        <span className="text-mute fs-12">Project Manager</span>
                      </div>
                      <div>
                        <a href="#" className="btn btn-sm btn-primary-light">Reply</a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-30">
                      <div className="me-15">
                        <img src="/app/images/avatar/avatar-2.png" className="bg-primary-light avatar avatar-lg rounded-circle" alt="" />
                      </div>
                      <div className="d-flex flex-column flex-grow-1">
                        <a href="#" className="text-dark hover-danger mb-1 fs-16">Mason</a>
                        <span className="text-mute fs-12">Art Director</span>
                      </div>
                      <div>
                        <a href="#" className="btn btn-sm btn-primary-light">Reply</a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-30">
                      <div className="me-15">
                        <img src="/app/images/avatar/avatar-3.png" className="bg-primary-light avatar avatar-lg rounded-circle" alt="" />
                      </div>
                      <div className="d-flex flex-column flex-grow-1">
                        <a href="#" className="text-dark hover-success mb-1 fs-16">Emily</a>
                        <span className="text-mute fs-12">Sales Manager</span>
                      </div>
                      <div>
                        <a href="#" className="btn btn-sm btn-primary-light">Reply</a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-30">
                      <div className="me-15">
                        <img src="/app/images/avatar/avatar-4.png" className="bg-primary-light avatar avatar-lg rounded-circle" alt="" />
                      </div>
                      <div className="d-flex flex-column flex-grow-1">
                        <a href="#" className="text-dark hover-info mb-1 fs-16">Daniel</a>
                        <span className="text-mute fs-12">Creative Head</span>
                      </div>
                      <div>
                        <a href="#" className="btn btn-sm btn-primary-light">Reply</a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="me-15">
                        <img src="/app/images/avatar/avatar-5.png" className="bg-primary-light avatar avatar-lg rounded-circle" alt="" />
                      </div>
                      <div className="d-flex flex-column flex-grow-1">
                        <a href="#" className="text-dark hover-warning mb-1 fs-16">Natalie</a>
                        <span className="text-mute fs-12">QA Managers</span>
                        
                      </div>
                      <div>
                        <a href="#" className="btn btn-sm btn-primary-light">Reply</a>
                      </div>
                    </div>
                  </div>
                </div> {/* end card-body*/}
              </div> {/* end card*/}
            </div> {/* end col*/}
            <div className="col-xl-8 col-lg-7">
              <div className="card">
                <div className="card-body">
                  <ul className="nav nav-pills bg-nav-pills nav-justified mb-3">
                    <li className="nav-item">
                      <a href="#aboutme" data-bs-toggle="tab" aria-expanded="false" className="nav-link rounded-0">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#timelinest" data-bs-toggle="tab" aria-expanded="true" className="nav-link rounded-0 active">
                        Timeline
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#settings" data-bs-toggle="tab" aria-expanded="false" className="nav-link rounded-0">
                        Settings
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane" id="aboutme">
                      <h5 className="text-uppercase"><i className="mdi mdi-briefcase me-1" />
                        Experience</h5>
                      <div className="timeline-alt pb-0">
                        <div className="timeline-item">
                          <i className="mdi mdi-circle bg-info-light text-info timeline-icon" />
                          <div className="timeline-item-info">
                            <h5 className="fs-14 mt-0 mb-1">Php Developer</h5>
                            <p>Dummy.com <span className="ms-2 fs-12">Year: 2015 - 18</span></p>
                            <p className="text-muted mt-2 mb-0 pb-3">Everyone realizes why a new common language
                              would be desirable: one could refuse to pay expensive translators.
                              To achieve this, it would be necessary to have uniform grammar,
                              pronunciation and more common words.</p>
                          </div>
                        </div>
                        <div className="timeline-item">
                          <i className="mdi mdi-circle bg-primary-light text-primary timeline-icon" />
                          <div className="timeline-item-info">
                            <h5 className="fs-14 mt-0 mb-1">Web Graphic Designer</h5>
                            <p>Dummy Inc. <span className="ms-2 fs-12">Year: 2012 - 15</span></p>
                            <p className="text-muted mt-2 mb-0 pb-3">If several languages coalesce, the grammar
                              of the resulting language is more simple and regular than that of
                              the individual languages. The new common language will be more
                              simple and regular than the existing European languages.</p>
                          </div>
                        </div>
                        <div className="timeline-item">
                          <i className="mdi mdi-circle bg-info-light text-info timeline-icon" />
                          <div className="timeline-item-info">
                            <h5 className="fs-14 mt-0 mb-1">Content create</h5>
                            <p>Dummy pllc <span className="ms-2 fs-12">Year: 2010 - 12</span></p>
                            <p className="text-muted mt-2 mb-0 pb-2">The European languages are members of
                              the same family. Their separate existence is a myth. For science
                              music sport etc, Europe uses the same vocabulary. The languages
                              only differ in their grammar their pronunciation.</p>
                          </div>
                        </div>
                      </div>
                      {/* end timeline */}        
                      <h5 className="mb-3 mt-4 text-uppercase"><i className="mdi mdi-cards-variant me-1" />
                        Projects</h5>
                      <div className="table-responsive">
                        <table className="table text-fade table-borderless table-nowrap mb-0">
                          <thead className="table-light">
                            <tr>
                              <th>#</th>
                              <th>Clients</th>
                              <th>Project Name</th>
                              <th>Start Date</th>
                              <th>Due Date</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td><img src="/app/images/avatar/avatar-1.png" alt="table-user" className="bg-light me-2 rounded-circle" height={24} /> Nil Yeager</td>
                              <td>App design and development</td>
                              <td>01/01/2015</td>
                              <td>10/15/2018</td>
                              <td><span className="badge badge-info-light">Work in Progress</span></td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td><img src="/app/images/avatar/avatar-2.png" alt="table-user" className="bg-light me-2 rounded-circle" height={24} /> Mical doe</td>
                              <td>Coffee detail page - Main Page</td>
                              <td>21/07/2016</td>
                              <td>12/05/2018</td>
                              <td><span className="badge badge-danger-light">Pending</span></td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td><img src="/app/images/avatar/avatar-3.png" alt="table-user" className="bg-light me-2 rounded-circle" height={24} /> Lucy Doe</td>
                              <td>Poster illustation design</td>
                              <td>18/03/2018</td>
                              <td>28/09/2018</td>
                              <td><span className="badge badge-success-light">Done</span></td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td><img src="/app/images/avatar/avatar-4.png" alt="table-user" className="bg-light me-2 rounded-circle" height={24} /> ToodDoe</td>
                              <td>Drinking bottle graphics</td>
                              <td>02/10/2017</td>
                              <td>07/05/2018</td>
                              <td><span className="badge badge-info-light">Work in Progress</span></td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td><img src="/app/images/avatar/avatar-5.png" alt="table-user" className="bg-light me-2 rounded-circle" height={24} /> Mical Doe</td>
                              <td>Landing page design - Home</td>
                              <td>17/01/2017</td>
                              <td>25/05/2021</td>
                              <td><span className="badge badge-warning-light">Coming soon</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div> {/* end tab-pane */}
                    {/* end about me section content */}
                    <div className="tab-pane show active" id="timelinest">
                      {/* comment box */}
                      <div className="border rounded mt-2 mb-3">
                        <form action="#" className="comment-area-box">
                          <textarea rows={3} className="form-control border-0 resize-none" placeholder="Write something...." defaultValue={""} />
                          <div className="p-2 bg-gray-100 d-flex justify-content-between align-items-center">
                            <div>
                              <a href="#" className="btn btn-sm px-2 fs-16 btn-primary-light"><i className="mdi mdi-account-circle" /></a>
                              <a href="#" className="btn btn-sm px-2 fs-16 btn-primary-light"><i className="mdi mdi-map-marker" /></a>
                              <a href="#" className="btn btn-sm px-2 fs-16 btn-primary-light"><i className="mdi mdi-camera" /></a>
                              <a href="#" className="btn btn-sm px-2 fs-16 btn-primary-light"><i className="mdi mdi-emoticon" /></a>
                            </div>
                            <button type="submit" className="btn btn-sm btn-primary-light waves-effect">Post</button>
                          </div>
                        </form>
                      </div> {/* end .border*/}
                      {/* end comment box */}
                      {/* Story Box*/}
                      <div className="border border-light rounded p-2 mb-3">
                        <div className="d-flex">
                          <img className="me-2 rounded-circle bg-light" src="/app/images/avatar/avatar-1.png" alt="Generic placeholder image" height={32} />
                          <div>
                            <h5 className="fs-15 m-0">Jeremy Tomlinson</h5>
                            <p className="text-muted"><small>about 2 minuts ago</small></p>
                          </div>
                        </div>
                        <p className="text-fade">Story based around the idea of time lapse, animation to post soon!</p>
                        <img src="/app/images/gallery/thumb-sm/1.jpg" alt="post-img" className="rounded bg-light me-1" height={100} />
                        <img src="/app/images/gallery/thumb-sm/2.jpg" alt="post-img" className="rounded bg-light me-1" height={100} />
                        <img src="/app/images/gallery/thumb-sm/3.jpg" alt="post-img" className="rounded bg-light" height={100} />
                        <div className="mt-2">
                          <a href="javascript: void(0);" className="btn btn-sm btn-primary-light"><i className="mdi mdi-reply" /> Reply</a>
                          <a href="javascript: void(0);" className="btn btn-sm btn-primary-light"><i className="mdi mdi-heart-outline" /> Like</a>
                          <a href="javascript: void(0);" className="btn btn-sm btn-primary-light"><i className="mdi mdi-share-variant" /> Share</a>
                        </div>
                      </div>
                      {/* Story Box*/}
                      <div className="border border-light rounded p-2 mb-3">
                        <div className="d-flex">
                          <img className="me-2 rounded-circle bg-light" src="/app/images/avatar/avatar-1.png" alt="Generic placeholder image" height={32} />
                          <div>
                            <h5 className="m-0 fs-15">Thelma Fridley</h5>
                            <p className="text-muted">about 1 hour ago</p>
                          </div>
                        </div>
                        <div className="fs-13 text-center fst-italic text-fade">
                          <i className="mdi mdi-format-quote-open fs-13" /> Cras sit amet nibh libero, in
                          gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra turpis. Duis
                          sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper
                          porta. Mauris massa.
                        </div>
                        <div className="my-2 p-15 mt-3">
                          <div className="d-flex">
                            <img className="me-2 rounded-circle bg-light" src="/app/images/avatar/avatar-2.png" alt="Generic placeholder image" height={32} />
                            <div>
                              <h5 className="fs-15 mt-0 mb-0">Jeremy Tomlinson</h5> 
                              <p className="text-muted">3 hours ago</p>
                              <span className="text-fade">Nice work, makes me think of The Money Pit.</span>
                              <br />
                              <a href="javascript: void(0);" className="text-muted d-inline-block mt-2"><i className="mdi mdi-reply" /> Reply</a>
                              <div className="d-flex mt-3">
                                <a className="pe-2" href="#">
                                  <img className="me-2 rounded-circle bg-light" src="/app/images/avatar/avatar-3.png" alt="Generic placeholder image" height={32} />
                                </a>
                                <div>
                                  <h5 className="fs-15 mt-0 mb-0">Thelma Fridley</h5>
                                  <p className="text-muted">5 hours ago</p>
                                  <span className="text-fade">i'm in the middle of a timelapse animation myself! (Very different though.) Awesome stuff.</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex mt-2">
                            <a className="pe-2" href="#">
                              <img className="me-2 rounded-circle bg-light" src="/app/images/avatar/avatar-1.png" alt="Generic placeholder image" height={32} />
                            </a>
                            <div className="w-100">
                              <input type="text" id="simpleinput" className="form-control border-0 form-control-sm" placeholder="Add comment" />
                            </div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <a href="javascript: void(0);" className="btn btn-sm btn-danger-light"><i className="mdi mdi-heart" /> Like (28)</a>
                          <a href="javascript: void(0);" className="btn btn-sm btn-danger-light"><i className="mdi mdi-share-variant" /> Share</a>
                        </div>
                      </div>
                      {/* Story Box*/}
                      <div className="border border-light p-2 mb-3">
                        <div className="d-flex">
                          <img className="me-2 rounded-circle bg-light" src="/app/images/avatar/avatar-6.png" alt="Generic placeholder image" height={32} />
                          <div>
                            <h5 className="fs-15 m-0">Martin Williamson</h5>
                            <p className="text-muted"><small>15 hours ago</small></p>
                          </div>
                        </div>
                        <p className="text-fade">The parallax is a little odd but O.o that house build is awesome!!</p>
                        <iframe src="https://player.vimeo.com/video/87993762" height={300} className="w-auto img-fluid border-0" />
                      </div>
                      <div className="text-center">
                        <a href="javascript:void(0);" className="text-danger"><i className="mdi mdi-spin mdi-loading me-1" /> Load more </a>
                      </div>
                    </div>
                    {/* end timeline content*/}
                    <div className="tab-pane" id="settings">
                      <form>
                        <h5 className="mb-4 text-uppercase"><i className="mdi mdi-account-circle me-1" /> Personal Info</h5>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="firstname" className="form-label">First Name</label>
                              <input type="text" className="form-control" id="firstname" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="lastname" className="form-label">Last Name</label>
                              <input type="text" className="form-control" id="lastname" />
                            </div>
                          </div> {/* end col */}
                        </div> {/* end row */}
                        <div className="row">
                          <div className="col-12">
                            <div className="mb-3">
                              <label htmlFor="userbio" className="form-label">Bio</label>
                              <textarea className="form-control" id="userbio" rows={4} defaultValue={""} />
                            </div>
                          </div> {/* end col */}
                        </div> {/* end row */}
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="useremail" className="form-label">Email Address</label>
                              <input type="email" className="form-control" id="useremail" />
                              <span className="form-text text-muted">If you want to change email please <a href="javascript: void(0);">click</a> here.</span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="userpassword" className="form-label">Password</label>
                              <input type="password" className="form-control" id="userpassword" />
                              <span className="form-text text-muted">If you want to change password please <a href="javascript: void(0);">click</a> here.</span>
                            </div>
                          </div> {/* end col */}
                        </div> {/* end row */}
                        <h5 className="mt-3 mb-4 text-uppercase"><i className="mdi mdi-office me-1" /> Company Info</h5>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="companyname" className="form-label">Company Name</label>
                              <input type="text" className="form-control" id="companyname" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="cwebsite" className="form-label">Website</label>
                              <input type="text" className="form-control" id="cwebsite" />
                            </div>
                          </div> {/* end col */}
                        </div> {/* end row */}
                        <h5 className="mt-3 mb-4 text-uppercase"><i className="mdi mdi-earth me-1" /> Social</h5>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="social-fb" className="form-label">Facebook</label>
                              <div className="input-group">
                                <span className="input-group-text"><i className="mdi mdi-facebook" /></span>
                                <input type="text" className="form-control" id="social-fb" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="social-tw" className="form-label">Twitter</label>
                              <div className="input-group">
                                <span className="input-group-text"><i className="mdi mdi-twitter" /></span>
                                <input type="text" className="form-control" id="social-tw" />
                              </div>
                            </div>
                          </div> {/* end col */}
                        </div> {/* end row */}
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="social-insta" className="form-label">Instagram</label>
                              <div className="input-group">
                                <span className="input-group-text"><i className="mdi mdi-instagram" /></span>
                                <input type="text" className="form-control" id="social-insta" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="social-lin" className="form-label">Linkedin</label>
                              <div className="input-group">
                                <span className="input-group-text"><i className="mdi mdi-linkedin" /></span>
                                <input type="text" className="form-control" id="social-lin" />
                              </div>
                            </div>
                          </div> {/* end col */}
                        </div> {/* end row */}
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="social-sky" className="form-label">Skype</label>
                              <div className="input-group">
                                <span className="input-group-text"><i className="mdi mdi-skype" /></span>
                                <input type="text" className="form-control" id="social-sky" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="social-gh" className="form-label">Github</label>
                              <div className="input-group">
                                <span className="input-group-text"><i className="mdi mdi-github-face" /></span>
                                <input type="text" className="form-control" id="social-gh" />
                              </div>
                            </div>
                          </div> {/* end col */}
                        </div> {/* end row */}
                        <div className="text-end">
                          <button type="submit" className="btn btn-primary mt-2"><i className="mdi mdi-content-save" /> Save</button>
                        </div>
                      </form>
                    </div>
                    {/* end settings content*/}
                  </div> {/* end tab-content */}
                </div> {/* end card body */}
              </div> {/* end card */}
            </div> {/* end col */}
          </div>
          {/* end row*/}
        </section>
        {/* /.content */}
      </div>
    </div>
  );
}

export default Profile;
