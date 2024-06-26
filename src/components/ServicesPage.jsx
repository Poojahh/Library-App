import React from 'react'
import Navbar from './Navbar'

const ServicesPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sl no</th>
                                    <th scope="col">Title Services</th>
                                    <th>Description</th>
                                    <th>Image Link</th>
                                </tr>
                            </thead>
                            <tbody class>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Circulation Services</td>
                                    <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi amet ratione dicta reiciendis. Est, ipsum incidunt maiores veniam provident ullam facere perferendis dolore nobis animi molestias inventore vero eos? Laboriosam?</td>
                                    <td>https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxbcw1vIViuUphfn-IRsHt0l2U8ol7en8vWw&s</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Reference Services</td>
                                    <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi amet ratione dicta reiciendis. Est, ipsum incidunt maiores veniam provident ullam facere perferendis dolore nobis animi molestias inventore vero eos? Laboriosam?</td>
                                    <td>https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxbcw1vIViuUphfn-IRsHt0l2U8ol7en8vWw&s</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Online reservation of Books</td>
                                    <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi amet ratione dicta reiciendis. Est, ipsum incidunt maiores veniam provident ullam facere perferendis dolore nobis animi molestias inventore vero eos? Laboriosam?</td>
                                    <td>https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxbcw1vIViuUphfn-IRsHt0l2U8ol7en8vWw&s</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Printing Services</td>
                                    <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi amet ratione dicta reiciendis. Est, ipsum incidunt maiores veniam provident ullam facere perferendis dolore nobis animi molestias inventore vero eos? Laboriosam?</td>
                                    <td>https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxbcw1vIViuUphfn-IRsHt0l2U8ol7en8vWw&s</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Current Awareness Services</td>
                                    <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi amet ratione dicta reiciendis. Est, ipsum incidunt maiores veniam provident ullam facere perferendis dolore nobis animi molestias inventore vero eos? Laboriosam?</td>
                                    <td>https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxbcw1vIViuUphfn-IRsHt0l2U8ol7en8vWw&s</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesPage
