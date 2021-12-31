import React from 'react';
import statusCards from '../assets/JsonData/status-card-data.json';
import {Link} from 'react-router-dom';
import Chart from 'react-apexcharts';
import StatusCard from '../components/status-card/StatusCard';
import Tables from '../components/tables/Tables';


const chartOptions = {
    series: [{
        name: 'Clientes Online',
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    },{
        name: 'Clientes da Loja',
        data: [40,30,70,80,40,16,47,20,51]
    }],
    options: {
        color:['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enable: false
        },
        stroke: {
            curve: 'smooth',
        },
        xaxis: {
            categories:['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set']
        },
        legend:{
            position: 'top'
        },
        grid:{
            show: false
        }
    }
}



const clientesTops = {
    head: [
        'user',
        'total orders',
        'total spending'
    ],

    body: [
        {
            "username": "john doe",
            "order": "490",
            "price": "R$ 15.870"
        },
        {
            "username": "Bruce Wayne",
            "order": "490",
            "price": "R$ 15.870"
        },
        {
            "username": "Barry Allen",
            "order": "490",
            "price": "R$ 15.870"
        },
        {
            "username": "Clark Kent",
            "order": "490",
            "price": "R$ 15.870"
        },
        {
            "username": "Ash",
            "order": "490",
            "price": "R$ 15.870"
        },

    ]
}



const renderClientesHead = (item, index) => (
    <th key={index}>{item}</th>
)


const renderClientesBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)


const proximosPedidos = {
    header: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1811",
            user: "john doe",
            date: "17 Jun 2021",
            status: "shipping"   
        },
        {
            id: "#OD1811",
            user: "john doe",
            date: "17 Jun 2021",
            status: "shipping"   
        },
        {
            id: "#OD1811",
            user: "john doe",
            date: "17 Jun 2021",
            status: "shipping"   
        },
        {
            id: "#OD1811",
            user: "john doe",
            date: "17 Jun 2021",
            status: "shipping"   
        },
        {
            id: "#OD1811",
            user: "john doe",
            date: "17 Jun 2021",
            status: "shipping"   
        },
    ]
}

const pedidosStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "sucess",
    "refund": "danger"
}


const renderPedidosHead = (item, index) => (
    <th key={index}>
        {item}
    </th>
)

const renderPedidosBody = (item, index) => (
    <tr>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <span>{item.status}</span>
        </td>
    </tr>
)

const Dashboard = () => {
    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                            {
                                statusCards.map((item, index) => (
                                    <div className="col-6">
                                        {/* status do card aqui */}
                                        <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                        />
                                    </div>
                                ))
                            }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        {/* Charts */}
                        <Chart
                            options={chartOptions.options}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>Clientes Tops ✨</h3>
                        </div>
                        <div className="card__body">
                            {/* tabela */}
                            <Tables
                                headData={clientesTops.head}
                                renderHead={(item, index) => renderClientesHead(item, index)}
                                bodyData={clientesTops.body}
                                renderBody={(item, index)=>renderClientesBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>Ver Todos</Link>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>últimos pedidos</h3>
                        </div>
                        <div className="card__body">
                            <Tables
                                headData={proximosPedidos.header}
                                renderHead={(item, index) => renderPedidosHead(item, index)}
                                bodyData={proximosPedidos.body}
                                renderBody={(item, index)=>renderPedidosBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>Ver todos</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard
