import './App.scss'
import logo from './logo.svg'
import data from './data'
import CustomTooltip from './CustomTooltip'
import { getDay } from './date'

import { ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, Tooltip } from 'recharts'
import { useState } from 'react'

function App() {

    // position of toolbox 
    const [pos, setPos] = useState(null)

    const calculateTotal = () => {
        return data.map(i => i.amount).reduce((prev, next) => prev+next, 0)
    }

    const day = getDay()

    return (
        <div className="app">

            <div className="app__container">

                <header>

                    <section className="balance">

                        <p>My balance</p>

                        <p>$921.48</p>

                    </section>

                    <img
                        className="logo"
                        src={logo}
                        alt="logo"
                    />

                </header>

                <main>

                    <h1 className="imp">
                        Spending - Last 7 days
                    </h1>

                    <ResponsiveContainer width="100%" height={180} >
                    
                        <BarChart data={data}>

                            <XAxis 
                                dataKey="day" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{fontSize: "0.8em"}}
                            />

                            <Tooltip 
                                content={<CustomTooltip/>}
                                cursor={{fill: "transparent"}}
                                position={{x: pos?.x-15, y: pos?.y-30 }}
                            />

                            <Bar 
                                dataKey="amount" 
                                barSize={35} 
                                radius={5}
                                onMouseOver={e => setPos(e)}
                                onTouchStart={e => setPos(e)}
                            >
                                {data.map(i => (
                                    <Cell 
                                        className="bar"
                                        key={i.day} 
                                        fill={i.day==day ? "#76b5bc" : "#ec775f"} 
                                    />
                                ))}
                            </Bar>

                        </BarChart>

                    </ResponsiveContainer>

                    <hr/>

                    <section className="desc">

                        <section className="total">

                            <p>
                                Total this month
                            </p>

                            <p className="imp">
                                ${calculateTotal()}
                            </p>

                        </section>

                        <section className="gains">

                            <p className="imp">
                                +2.4%
                            </p>

                            <p>
                                from last month
                            </p>

                        </section>

                    </section>

                </main>

            </div>

        </div>
    )
}

export default App