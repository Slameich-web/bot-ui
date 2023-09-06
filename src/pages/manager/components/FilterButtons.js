import React from 'react'

function FilterButtons({ setStatusDropDown, setMockData, statusFilter, data, dateSort, statusDropDown, sortDropDown, setSortDropDown }) {
    return (
        <div className="filter_buttons_container">
            <div className="filter_buttons">


                <div className='button_selector'>
                    <div className='selector_button_container'> <button onClick={(e) => setSortDropDown(sortDropDown ? false : true) & e.stopPropagation()}>Сортировать по</button></div>
                    {sortDropDown ? <div className='hidden_buttons'>
                        <button onClick={() => dateSort() & setSortDropDown(prev => !prev)}>Дате</button>
                        <button onClick={() => setMockData(data) & setSortDropDown(prev => !prev)}>-</button>
                    </div> : " "}

                </div>
                <div className='button_selector'>
                    <div className='selector_button_container'>   <button onClick={(e) => setStatusDropDown(statusDropDown ? false : true) & e.stopPropagation()}>
                        Фильтровать по статусу
                    </button></div>
                    {statusDropDown ? <div className='hidden_buttons'>
                        <button onClick={() => setMockData(data) & setStatusDropDown(prev => !prev)}>-</button>
                        <button onClick={() => statusFilter("В обработке") & setStatusDropDown(prev => !prev)}>
                            В обработке
                        </button>
                        <button style={{ color: "#2ee72e" }} onClick={() => statusFilter("Обработан") & setStatusDropDown(prev => !prev)}>
                            {" "}
                            Обработан
                        </button>
                    </div> : " "}

                </div>
            </div>
        </div>
    )
}

export default FilterButtons