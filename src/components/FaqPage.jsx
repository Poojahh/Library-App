import React from 'react'

const FaqPage = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <center><img src="data:image/jpeg;base64,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" alt="" />
                        <center> <h2>Type a question</h2></center></center>
                        <textarea name="" id="" className="form-control"></textarea>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Is it has online payment option?
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ad incidunt illo numquam dicta autem quod provident? Distinctio quis provident possimus hic, tenetur aspernatur praesentium ex fugit cumque velit id.</strong>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Is it will update next year?
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sapiente quibusdam ad cupiditate expedita iure necessitatibus sint, non accusantium nostrum at atque voluptatibus repellendus saepe illo quisquam, rem ex libero.</strong>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        If i can access book at any time?
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quo consequuntur itaque amet soluta, perspiciatis error modi possimus tempora inventore asperiores, harum maiores ab repudiandae sequi, non placeat doloremque quia.</strong>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        More related questions?
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quo consequuntur itaque amet soluta, perspiciatis error modi possimus tempora inventore asperiores, harum maiores ab repudiandae sequi, non placeat doloremque quia.</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqPage
