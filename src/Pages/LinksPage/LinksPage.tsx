import { useState } from "react";
import "./LinksPage.scss";

interface ImportantLink {
    title: string;
    address: string;
}

const IMPORTANT_LINKS: ImportantLink[] = [
    {
        address: '#',
        title: 'Government of Pakistan'
    },
    {
        address: '#',
        title: 'Supreme Court of Pakistan'
    },
    {
        address: '#',
        title: 'Islamabad High Court'
    },
    {
        address: '#',
        title: 'Lahore High Court'
    },
    {
        address: '#',
        title: 'Sindh High Court'
    },
    {
        address: '#',
        title: 'K.P.K High Court'
    },
    {
        address: '#',
        title: 'Baluchistan High Court'
    },
    {
        address: '#',
        title: 'Federal Shariat Court'
    },
    {
        address: '#',
        title: 'Pakistan Bar Council'
    },
    {
        address: '#',
        title: 'Islamabad Bar Council'
    },
    {
        address: '#',
        title: 'Punjab Bar Council'
    },
    {
        address: '#',
        title: 'KPK Bar Council'
    },
    {
        address: '#',
        title: 'Sindh Bar Council'
    },
    {
        address: '#',
        title: 'Balochistan Bar Council'
    },
    {
        address: '#',
        title: 'Intellectual Property Organization (IPO)'
    },
    {
        address: '#',
        title: 'Securities & Exchange Commission of Pakistan (SECP)'
    },
    {
        address: '#',
        title: 'Competition Commission of Pakistan (CCP)'
    },
    {
        address: '#',
        title: 'National Accountability Bureau (NAB)'
    },
    {
        address: '#',
        title: 'Pakistan Telecommunication Authority (PTA)'
    },
    {
        address: '#',
        title: 'Pakistan Electronic Media Regulatory Authority (PEMRA)'
    },
    {
        address: '#',
        title: 'Oil and Gas Regulatory Authority (OGRA)'
    },
    {
        address: '#',
        title: 'State Bank of Pakistan (SBP)'
    },
    {
        address: '#',
        title: 'National Industrial Relations Commission (NIRC)'
    },
    {
        address: '#',
        title: 'Employees Old-Age Benefits Institution (EOBI)'
    },
    {
        address: '#',
        title: 'National Energy & Power Regulatory Authority (NEPRA)'
    },
    {
        address: '#',
        title: 'Federal Ombudsman'
    },
    {
        address: '#',
        title: 'Banking Mohtasib Pakistan'
    },
    {
        address: '#',
        title: 'Federal Insurance Ombudsman'
    },
    {
        address: '#',
        title: 'Federal Tax Ombudsman'
    },
    {
        address: '#',
        title: 'Federal Ombudsperson for Protection against Harassment of Women at Workplace'
    },
    {
        address: '#',
        title: 'Federal Board of Revenue (FBR)'
    },
    {
        address: '#',
        title: 'Higher Education Commission (HEC)'
    },
    {
        address: '#',
        title: 'National Administrative Data Regulatory Authority (NADRA)'
    },
];


interface ComponentState {
    name: string;
    links: ImportantLink[];
}

const DEFAULT_STATE: ComponentState = {
    name: 'IMPORTANT LINKS',
    links: IMPORTANT_LINKS
};

const LinksPage = () => {
    const [state] = useState<ComponentState>(DEFAULT_STATE);

    return (
        <main>
            {/* <h2>Hi! This is {state.name} page.</h2> */}
            <div className="app-links-container">
                <div className="header">
                    <h3 className='page-title'>{state.name}</h3>
                </div>
                <div className="inner">
                    {
                        state.links ?
                            state.links.map((link) => {
                                return (
                                    <div className="app-link-container">
                                        <span className="link">{link.title}</span>
                                    </div>
                                )
                            })
                            : null
                    }
                </div>

            </div>
        </main>
    );
};

export default LinksPage;

// @extends('shared.layout')
// @section('content')
// <div class="row">
//     <div class="col-lg-12">
//         <h3 class="text-center mt-5 py-2 text-light custom_title_div">Important Links</h3>
//         <div class="row py-3">
//             <div class="col-12">
//                 <div class="card">
//                     <div class="card-body">
//                         <ul class="list-group">
//    <li class="list-group-item">Government of Pakistan</li>
//    <li class="list-group-item">Supreme Court of Pakistan</li>
//                             <li class="list-group-item">Islamabad High Court</li>
//                             <li class="list-group-item">Lahore High Court</li>
//                             <li class="list-group-item">Sindh High Court</li>
//                             <li class="list-group-item">K.P.K High Court</li>
//                             <li class="list-group-item">Baluchistan High Court</li>
//                             <li class="list-group-item">Federal Shariat Court</li>
//                             <li class="list-group-item">Pakistan Bar Council</li>
//                             <li class="list-group-item">Islamabad Bar Council</li>
//                             <li class="list-group-item">Punjab Bar Council</li>
//                             <li class="list-group-item">KPK Bar Council</li>
//                             <li class="list-group-item">Sindh Bar Council</li>
//                             <li class="list-group-item">Baluchistan Bar Council</li>
//                             <li class="list-group-item">Intellectual Property Organization (IPO)</li>
//                             <li class="list-group-item">Securities & Exchange Commission of Pakistan (SECP)</li>
//                             <li class="list-group-item">Competition Commission of Pakistan (CCP)</li>
//                             <li class="list-group-item">National Accountability Bureau (NAB)</li>
//                             <li class="list-group-item">Pakistan Telecommunication Authority (PTA)</li>
//                             <li class="list-group-item">Pakistan Electronic Media Regulatory Authority (PEMRA)</li>
//                             <li class="list-group-item">Oil and Gas Regulatory Authority (OGRA)</li>
//                             <li class="list-group-item">State Bank of Pakistan (SBP)</li>
//                             <li class="list-group-item">National Industrial Relations Commission (NIRC)</li>
//                             <li class="list-group-item">Employees Old-Age Benefits Institution (EOBI)</li>
//                             <li class="list-group-item">National Energy & Power Regulatory Authority (NEPRA)</li>
//                             <li class="list-group-item">Federal Ombudsman</li>
//                             <li class="list-group-item">Banking Mohtasib Pakistan</li>
//                             <li class="list-group-item">Federal Insurance Ombudsman</li>
//                             <li class="list-group-item">Federal Tax Ombudsman</li>
//                             <li class="list-group-item">Federal Ombudsperson for Protection against Harassment of Women
//                                 at Workplace</li>
//                             <li class="list-group-item">Federal Board of Revenue (FBR)</li>
//                             <li class="list-group-item">Higher Education Commission (HEC)</li>
//                             <li class="list-group-item">National Administrative Data Regulatory Authority (NADRA)</li>
//                         </ul>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// @endsection
