import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAnimals = () => {
    const[data,changeData]=useState(
        [
            {"image":"https://img.freepik.com/free-photo/amazing-bengal-tiger-nature_475641-1205.jpg?t=st=1717776314~exp=1717779914~hmac=5553d984600588bebee8cab4ad0cc4cd156b85e024cf288433087d0aabe94d7f&w=1060","animalno":1,"name":"Diego","cageno":10},
            {"image":"https://img.freepik.com/free-photo/beautiful-baby-zebra-sitting-ground-captured-african-jungle_181624-35400.jpg?t=st=1717775773~exp=1717779373~hmac=4bf2c4ed4017a996c4423297325cd992489fb89cd2afa5d645154bcc634cf860&w=1060","animalno":2,"name":"Midhun","cageno":12},
            {"image":"https://img.freepik.com/free-photo/elephants-national-park-sri-lanka_167946-150.jpg?t=st=1717775848~exp=1717779448~hmac=57ee55f26b156d6bfe49c2565f8874a794d052f687791129bb2ce4caf022a2f4&w=1060","animalno":3,"name":"Bheem","cageno":16},
            {"image":"https://img.freepik.com/free-photo/african-lion-portrait-warm-light_475641-46.jpg?t=st=1717775878~exp=1717779478~hmac=c26c6464448fbbbfe052170845f2e5f0d97e6eee31097f3ab554b077e12a2191&w=1060","animalno":4,"name":"Shershah","cageno":19},
            {"image":"https://img.freepik.com/free-photo/closeup-shot-beautiful-peacock-park-daytime_181624-45502.jpg?t=st=1717775945~exp=1717779545~hmac=a4231889c842732915578a26bbf3449680e1fdd23e81c1f9e20c744cd462309e&w=1060","animalno":5,"name":"Mayoori","cageno":23},
            {"image":"https://img.freepik.com/free-photo/giraffes-herd-savannah_155003-6497.jpg?t=st=1717776013~exp=1717779613~hmac=45f21ca17d3dd7fa5279698e65b725b6fb65d4b5538a1e2bbda89494e432cac6&w=1060","animalno":6,"name":"Lilly","cageno":25},
            {"image":"https://img.freepik.com/free-photo/closeup-shot-ostrich-running-grassy-savanna-plain-namibia_181624-11585.jpg?t=st=1717776479~exp=1717780079~hmac=a2511c6c84fea5dce3c24de4f67a460175a551a8fb3b39a65cc4d80f061cd419&w=996","animalno":7,"name":"Tanyo","cageno":27},
            {"image":"https://img.freepik.com/free-photo/reindeer-standing-grassy-field_181624-6518.jpg?t=st=1717776519~exp=1717780119~hmac=a0e1a0fa43a31e9850ec6f19445835ff7eda8e9db9f85c6c81fd6ed38e9e3f7c&w=1060","animalno":8,"name":"Elk","cageno":31}
        ]
    )
  return ( 
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                    {
                        data.map(
                            (value,index) => {
                                return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card">
                                <img src={value.image} class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    
                                <p class="card-text">ANIMAL NO:{value.animalno}</p>
                                <p class="card-text">CAGE NO:{value.cageno}</p>
                                <a href="#" class="btn btn-primary">KNOW MORE</a>
                            </div>
                        </div>
                                </div>
                            }
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAnimals