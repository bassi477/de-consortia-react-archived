import { useState } from 'react';
import PROFILE_ICON from '../../Assets/images/profile.png';
import MAIL_ICON from '../../Assets/images/mail@30.png';
import PHONE_ICON from '../../Assets/images/phone@50.png';

import './PeoplePage.scss';

interface Person {
    name: string;
    image: string;
    detail: string[];
    phone?: string;
    email?: string;
}

const DEFAULT_PEOPLE: Person[] = [
    {
        name: 'Masood Ahmed Abbasi',
        detail: [
            'Masood Ahmed Abbasi is one of the earliest graduates ',
            'of International Islamic University, Islamabad. He has ',
            'appeared in all the courts subordinate to the High Courts. ',
            'Moreover, he has pleaded cases in the Islamabad High Court ',
            'and the Lahore High Court, Rawalpindi Bench as well as in ',
            'the Principal Seat in Lahore. He is considered to be ',
            'an authority of Civil Revenue matters. Masood Ahmed Abbasi ',
            'is the senior most member of the firm and also provides ',
            'guidance to the other partners of the firm. He is known ',
            'for trials relating to Civil Revenue, Transfer of Property',
            'Act, Succession, Inheritance, Specific Performance of ',
            'Agreements, Declaratory suits and Injunctions.',
            'Civil procedure is one of the strongest areas of Mr. Abbasi. ',
            'He has been practicing law for the past 30 years.'
        ],
        image: PROFILE_ICON,
        email: undefined,
        phone: '0300 5325151'
    },
    {
        name: 'Ajmal Ghaffar Toor',
        detail: [
            'Ajmal Ghaffar Toor secured his graduate degree in law from University of Peshawar and ',
            'is enrolled as an Advocate High Court. He is a strong legal professional and specializes ',
            'in Constitutional Law, Administrative Law, Service Laws and Civil Laws. ',
            'He has appeared/assisted in most of the major Constitutional cases during the last decade. ',
            'He is publicly known for his expertise in appeals. Furthermore, he is also well versed in ',
            'corporate, commercial and banking laws, intellectual property rights, negotiation and ',
            'drafting of contracts, alternative dispute resolution including arbitrations, advising on ',
            'regulatory and legal issues, conveyancing infrastructure transactions and litigation ',
            'pertaining to the aforesaid and related matters. He has held office as Secretary Library, ',
            'Islamabad District Bar Association 2012-2013 and Member Executive, Islamabad High Court Bar ',
            'Association 2016-2017 and has an experience of over 12 years.',
        ],
        image: PROFILE_ICON,
        email: 'ajmal.ghaffar@deconsortia.com',
        phone: '0346 7722299'
    },
    {
        name: 'Chaudry Ali Nawaz',
        detail: [
            'Chaudry Ali Nawaz graduated from the International Islamic University, Islamabad. In ',
            'the firm he has advised clients on Criminal Matters. He also provides guidance to ',
            'other partners of the firm in criminal litigation and advice. Chaudary Ali Nawaz has ',
            'appeared in pre-arrest bail petitions on behalf of complainants as well as Accused ',
            'persons before the High Courts, District Judges and Magistrates. Moreover, he has ',
            'successfully completed criminal trials before the District Judges and the  Magistrates. He ',
            'has appeared in cancellation of bails granted by different courts. Appeals filed against ',
            'judgments passed by trial courts as well as special courts. He is known for breaking down ',
            'false witnesses and carrying out excellent trial concluding arguments. Furthermore, he has ',
            'and is currently appearing and pleading cases in Special Tribunals including the Special ',
            'Courts of FIA and NAB apart from pending litigation before the District Judiciary. ',
            'Chaudry Ali Nawaz has grip over Criminal Law and Criminology. He has an experience of 10 years ',
            'in Criminal Law Practice.'
        ],
        image: PROFILE_ICON,
        email: 'ali.nawaz@deconsortia.com',
        phone: '0333 5338093'
    },
    {
        name: 'Faisal Pervaiz',
        detail: [
            'Faisal Pervaiz earned his undergraduate degree in law from university of London and ',
            'is enrolled as an Advocate High Court. Furthermore, he is a strong legal ',
            'professional and specialized corporate attorney who has served as an in-house ',
            'counsel in the telecommunication industry and handled complex legal ',
            'matters and projects. He has independently ensured the legality of commercial ',
            'transaction and advised companies on legal rights and duties. His key ',
            'responsibilities at the firm include developing policies for companies, researching, ',
            'anticipating and guarding companies against legal risks. He has experience in ',
            'handling all corporate legal processes (e.g. intellectual property, mergers &amp; ',
            'acquisitions, financial/securities offerings, drafting and reviewing reports, ',
            'compliance issues, transactions, drafting and administering agreements, representing ',
            'corporate clients in legal proceedings, licensing etc). He has trained and guided ',
            'managers and company officials to ensure compliance with rules and regulations. He ',
            'takes an analytical and meticulous approach and he is focused problem-solver. On the ',
            'top he has excellent negotiation and communication skills and strong attention to ',
            'detail. His clients include or have included multi-national, national, regional and ',
            'local companies involved in many different industries. He brings more than 7 years ',
            'of experience to the firm. Faisal also teaches law at various private institutions.'
        ],
        image: PROFILE_ICON,
        email: 'faisal.pervaiz@deconsortia.com',
        phone: '0335 1523055'
    },
    {
        name: 'Haider Bin Masud',
        detail: [
            'Haider Bin Masud graduated from the University of London and now is a member of the',
            'Islamabad High Court Bar Association and Islamabad District Bar Association.',
            'Currently hold an experience of more than 6 years. Over the past 6 years he has',
            'filled and pleaded cases in the High Court, District &amp; Session Courts. He has',
            'defended private companies in litigation pending before the National Industrial',
            'Relations Commission (NIRC). Advice private clients on matters related to leases,',
            'tenancy, succession, inheritance and criminal matters. He has represented Rawalpindi',
            'Cantonments Board in various litigations. He also writes articles on different',
            'topics of law. Moreover, he has conducted examination-in-chief and cross',
            'examination of witnesses, performed final arguments to concluded cases both civil',
            'and criminal. He has also dealt cases of revenue matters within land situated in',
            'Islamabad and various Teshils of district Rawalpindi. Apart from litigation he has',
            'also helped in the drafting of Islamabad Local Government Amendment Bill, 2017 and',
            'K.P.K Old Age Citizens Bill, 2017.'
        ],
        image: PROFILE_ICON,
        email: 'haider.masud@deconsortia.com',
        phone: '0321 9797955'
    },
];

interface PeoplePageState {
    debugLabel: string;
    displayTitle: string;
    people: Person[];
}

const DEFAULT_STATE: PeoplePageState = {
    debugLabel: 'PEOPLE',
    displayTitle: 'Our People',
    people: DEFAULT_PEOPLE
};

const PeoplePage = () => {
    const [state] = useState<PeoplePageState>(DEFAULT_STATE);

    return (
        <main className='app-page'>
            <div className='app-page-title-container'>
                <h3 className='page-title'>{state.displayTitle}</h3>
            </div>
            <div className='app-page-body'>
                <div className='app-page-card-container'>
                    {
                        state.people.map((person, index) => {
                            return (
                                <div key={`people-list-card-${index}`} className='app-card'>
                                    <div className='app-card-profile'>
                                        <img src={person.image} alt='profile' />
                                    </div>
                                    <div className='app-card-detail'>
                                        <div className='app-card-title'>
                                            <span>
                                                {person.name}
                                            </span>
                                        </div>

                                        <div className='app-card-summary'>
                                            <div className='info'>
                                                {person.detail.join('')}
                                            </div>
                                            <div className='contact'>
                                                {
                                                    person.phone ?
                                                        <div className='contact-detail'><img alt='phone' src={PHONE_ICON}/>{person.phone}</div>
                                                        : null
                                                }
                                                {
                                                    person.email ?
                                                        <div className='contact-detail'><img alt="mail" src={MAIL_ICON} />{person.email}</div>
                                                        : null
                                                }
                                            </div>
                                        </div>

                                    </div>
                                    {/* <div className='app-card-header'>
                                        <h3>{person.name}</h3>
                                    </div> */}
                                 
                                </div>
                            )
                        })
                    }
                </div>
                {/* <div className='app-grid-container'>
                    <div className='inner'>
                        
                    </div>
                </div> */}
            </div>
        </main>
    );
};

export default PeoplePage;