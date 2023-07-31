import React,{Fragment, useState} from "react";
import Dropdown from "../UI/DropDown";

const MasonData = (props) =>{
    const imageUrl = props.data.image;
    const {firstname,middlename,lastname,phoneNo,aadharNo,email,village} = props.data;
    const part1 =aadharNo.slice(0, 4);
    const part2 =aadharNo.slice(4, 8);
    const part3 =aadharNo.slice(8, 12);
    // const email = "abhitrivediairhkj1@gmail.com"
    console.log(props.data);
    console.log(imageUrl);
    const [formIsShown ,setFormIsShown] = useState(false);
    const showFormHandler = () =>{
        setFormIsShown(true);
    }
    // const hideFormHandler = ()=>{
    //     setFormIsShown(false);
    // }
    return (
        <Fragment >
           
            <div className="w-1/2 m-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                
                <Dropdown data = {props.data}></Dropdown>
                <div className="flex flex-col items-center pb-10">
                    <img className="w-32 h-32 mb-3 rounded-full shadow-lg" src={imageUrl} alt={`${firstname} ${middlename} ${lastname}`}/>
                    <span className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{`${firstname} ${middlename} ${lastname}`}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{village}</span>
                    <div className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12"
                        fill="none"
                        viewBox="0 0 2048 2048"
                        >
                        <g id="Layer_x0020_1" stroke="white"> 
                            <path
                            className="fil0"
                            d="M671.999 255.998H1376c44.033 0 84.041 17.992 113.026 46.975 28.983 28.984 46.975 68.993 46.975 113.026v95.997c0 17.673-14.328 32.001-32.001 32.001h-16.062v960H1504c17.673 0 32 14.328 32 32.001V1632c0 44.033-17.99 84.042-46.974 113.027C1460.042 1774.01 1420.033 1792 1376 1792H671.999c-44.033 0-84.041-17.991-113.026-46.974-28.983-28.985-46.975-68.993-46.975-113.026v-96.003c0-17.673 14.328-32 32.001-32h16.06v-960H544c-17.673 0-32-14.329-32-32.002V416c0-44.033 17.99-84.042 46.974-113.026 28.984-28.983 68.993-46.975 113.026-46.975zM1376 320H671.999c-26.367 0-50.361 10.81-67.775 28.223C586.81 365.637 576 389.631 576 415.998v63.997h16.06c17.674 0 32.002 14.328 32.002 32.001v1024c0 17.673-14.328 32-32.001 32H576v64.002c0 26.367 10.809 50.362 28.223 67.776 17.414 17.414 41.408 28.223 67.775 28.223H1376c26.367 0 50.361-10.81 67.775-28.223 17.414-17.414 28.224-41.409 28.224-67.775v-64.002h-16.062c-17.673 0-32-14.328-32-32v-1024c0-17.674 14.327-32.002 32-32.002h16.062v-63.997c0-26.367-10.81-50.36-28.224-67.775C1426.361 330.81 1402.367 320 1376 320z"
                             stroke="white" fill="white"/>
                            <path
                            className="fil0"
                            d="M550.966 479.998c-17.673 0-32 14.328-32 32 0 17.674 14.327 32.002 32 32.002H1497.036c17.673 0 32-14.328 32-32.001s-14.327-32.001-32-32.001H550.966zM550.966 1504c-17.673 0-32 14.328-32 32 0 17.674 14.327 32.002 32 32.002H1497.036c17.673 0 32-14.328 32-32.001s-14.327-32.001-32-32.001H550.966zM895.999 367.998c-17.673 0-32 14.328-32 32 0 17.674 14.327 32.002 32 32.002h256.002c17.673 0 32-14.328 32-32.001s-14.327-32.001-32-32.001H895.999zM971.672 1616c-17.673 0-32 14.328-32 32 0 17.674 14.327 32.002 32 32.002h104.655c17.673 0 32-14.328 32-32.001S1094 1616 1076.328 1616H971.672z"
                             stroke="white" fill="white"/>
                        </g>
                        <path d="M0 0h2048v2048H0z" stroke="white" strokeWidth={6} />
                        </svg>
                        <span className="text-lg text-gray-300 dark:text-gray-200 mx-4">{`+91${phoneNo}`}</span>
                    </div>
                    <div className="flex items-center m-2">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                         className="w-12 h-12"
                         fill="none"
                         viewBox="0 0 2048 2048">
                        <g id="Layer_x0020_1">
                            <path class="fil0" d="M0 0h2048v2048H0z" stroke="white" strokeWidth={25}/>
                        <g id="_445081872">
                            <path id="_445081920" class="fil0" d="M255.996 255.996h1536v1536h-1536z" fill ="none"/>
                            <path id="_445073400" class="fil1" d="M1741.53 575.999H306.46c-5.206 0-9.868 2.044-13.187 5.347-3.263 3.248-5.285 7.802-5.285 12.888v859.672c0 5.01 2.029 9.53 5.3 12.778 3.305 3.28 7.961 5.314 13.172 5.314h1435.07c5.237 0 9.905-2.022 13.205-5.297 3.251-3.227 5.266-7.743 5.266-12.795V594.234c0-5.082-2.022-9.633-5.284-12.88-3.4-3.384-8.07-5.479-13.187-5.48v.125zM306.46 511.997h1435.07v.126c22.72.007 43.305 9.17 58.187 23.98 14.995 14.926 24.286 35.479 24.286 58.131v859.672c0 22.669-9.284 43.173-24.268 58.045S1764.149 1536 1741.53 1536H306.46c-22.617 0-43.2-9.206-58.172-24.065-15.006-14.894-24.302-35.424-24.302-58.029V594.234c0-22.654 9.29-43.212 24.287-58.139 14.96-14.889 35.55-24.098 58.187-24.098z"/>
                            <path id="_445079256" class="fil1" d="M1056 735.996h544v64.002h-544z" fill="white"/>
                            <path id="_445078800" class="fil1" d="M1056 991.999h544V1056h-544z" fill="white"/>
                            <path id="_445077960" class="fil1" d="M1056 1248h544v64h-544z"fill="white"/>
                            <path id="_445072416" class="fil1" d="M813.551 806.82c6.738 5.975 12.14 13.045 16.26 20.82 7.54 14.228 10.555 30.704 9.417 46.71-.362 5.143-1.17 10.39-2.37 15.623a107.426 107.426 0 0 1-4.664 15.14c-4.47 11.411-10.984 22.13-19.104 31.062-4.969 5.468-10.567 10.31-16.71 14.306a246.138 246.138 0 0 1-5.01 11.064c-3.624 7.512-7.41 14.37-11.3 20.626-8.813 14.167-20.43 28.11-33.586 40.185-12.837 11.78-27.244 21.934-42.117 29.025-7.89 3.76-15.878 6.575-23.015 8.65-14.41 4.192-26.302 4.996-26.787 4.996h-4.45c-.654 0-12.615-.847-26.926-5.063-6.664-1.961-14.525-4.804-23.09-8.9a170.952 170.952 0 0 1-19.614-10.995 175.605 175.605 0 0 1-18.178-13.59c-5.99-5.132-12.097-11.077-18.192-17.962-6.171-6.968-12.002-14.473-17.266-22.52a213.753 213.753 0 0 1-12.414-21.67 223.012 223.012 0 0 1-6.375-14.029c-6.087-3.995-11.653-8.84-16.615-14.314-8.175-9.018-14.69-19.706-19.105-30.975a107.657 107.657 0 0 1-4.668-15.14c-1.2-5.219-2.01-10.466-2.381-15.628-.431-6.006-.316-11.988.399-17.81.684-5.556 2.037-11.372 4.12-17.376 3.353-9.663 8.317-18.55 15.079-26.186a73.755 73.755 0 0 1 5.664-5.738c-.224-5.129-.38-8.836-.38-9.228 0-21.497 4.331-42.122 12.173-61.037a159.912 159.912 0 0 1 34.614-51.828 159.894 159.894 0 0 1 51.827-34.615c18.914-7.841 39.537-12.171 61.037-12.171h4.741c21.497 0 42.12 4.33 61.032 12.171a159.908 159.908 0 0 1 51.825 34.615c21.834 21.837 33.914 43.812 40.31 67.769 4.621 17.316 5.962 34.937 5.819 54.013zm-38.078 49.43c-1.248-2.356-3.09-4.286-5.55-5.388l-19.046-8.54.894-20.791c.872-20.252.63-37.665-3.426-52.856-3.651-13.678-10.95-26.623-24.442-40.118-9.122-9.124-19.936-16.445-31.869-21.393-11.439-4.742-24.09-7.36-37.469-7.36h-4.74c-13.382 0-26.036 2.618-37.475 7.36-11.935 4.948-22.748 12.269-31.872 21.393-9.124 9.122-16.442 19.937-21.39 31.87-4.743 11.443-7.363 24.096-7.363 37.476 0 3.441.316 10.622.645 18.114v.115h.005l.235 5.408.906 20.813-18.938 8.519c-1.643.738-2.884 1.632-3.768 2.63-1.29 1.457-2.303 3.339-3.057 5.509-.413 1.193-.745 2.845-.994 4.874a31.271 31.271 0 0 0-.157 6.027 41.23 41.23 0 0 0 .938 6.252 46.42 46.42 0 0 0 2.02 6.483c1.847 4.711 4.35 8.938 7.327 12.222 2.269 2.503 4.773 4.434 7.369 5.497l12.536 5.14 4.654 12.771c2.32 6.371 5.032 12.593 8.048 18.642 2.819 5.655 5.773 10.78 8.806 15.418 3.997 6.108 7.925 11.244 11.737 15.548a124.019 124.019 0 0 0 12.18 11.95 113.395 113.395 0 0 0 11.687 8.783c4.538 2.958 8.78 5.298 12.643 7.147 4.836 2.312 9.668 4.033 13.952 5.295 6.83 2.011 9.522 2.415 9.617 2.415h4.449c.081 0 2.943-.378 9.718-2.35 3.734-1.085 8.314-2.748 13.636-5.286 9.37-4.466 18.61-11.01 26.972-18.685 9.092-8.344 17.048-17.866 23.005-27.442a159.094 159.094 0 0 0 8.174-14.856c2.41-4.991 4.754-10.534 7.003-16.672l4.68-12.77 12.632-5.144c2.507-1.02 4.98-2.936 7.263-5.448 3.038-3.342 5.539-7.512 7.323-12.069a46.142 46.142 0 0 0 2.019-6.485c.46-2.01.777-4.107.928-6.245.36-5.066-.42-9.95-2.445-13.773z" fill="white"/>
                            <path id="_445073568" class="fil1" d="m745.671 1149.73-.004-.001c-4.68-1.604-.375-.166-10.787-3.803-8.704 5.846-17.72 11.267-27.693 15.956-16.072 7.557-33.404 12.431-53.538 12.778-21.12.365-39.16-4.3-55.84-11.998-10.246-4.73-19.71-10.505-28.986-16.88a1257.08 1257.08 0 0 1-10.445 3.54l-2.297.755c-32 10.543-113.335 37.339-121.129 57.581l-.24.602c-5.604 13.71-14.795 38.472-21.631 62.38-4.082 14.277-7.029 27.231-7.029 34.711a31.286 31.286 0 0 0 9.18 22.198 31.286 31.286 0 0 0 22.199 9.18h429.635a31.297 31.297 0 0 0 22.202-9.18 31.277 31.277 0 0 0 9.104-19.958c-3.01-13.628-9.68-39.228-16.715-62.604-4.779-15.88-9.327-29.634-12.114-35.225-16.533-23.21-83.378-46.142-123.872-60.032zm19.956-58.185c48.223 16.54 128.163 43.961 155.394 84.799l1.08 1.802c5.57 9.672 12.273 28.73 18.46 49.29 7.911 26.28 15.797 57.45 18.717 71.904l.723 6.011c0 25.667-10.4 48.9-27.216 65.715-16.82 16.816-40.053 27.215-65.72 27.215H437.43c-25.667 0-48.9-10.4-65.716-27.215-16.815-16.815-27.215-40.048-27.215-65.715 0-13.695 3.956-32.378 9.435-51.54 7.106-24.849 17.521-52.697 24.035-68.633l.009.004c19-47.446 119.3-80.495 158.868-93.53l2.296-.756c6.232-2.057 10.32-3.418 12.276-4.09 3.733-1.277 7.758-2.683 12.105-4.226l15.321-5.44 13.17 9.767c10.729 7.955 21.056 15.148 31.52 19.976 8.967 4.138 18.436 6.65 29.153 6.465 10.41-.178 19.7-2.853 28.533-7.006 9.804-4.61 20.108-11.706 30.864-19.498l13.074-9.473 15.175 5.387 12.633 4.487c4.585 1.6-.845-.33 12.657 4.3h.003z" fill="white"/>
                        </g>
                        </g>
                        </svg>
                        <span className="text-lg text-gray-300 dark:text-gray-200 mx-4">{`${part1}-${part2}-${part3}`}</span>
                    </div>
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg"
                              className="w-12 h-12"
                              fill="none"
                              viewBox="0 0 2048 2048" >
                            <g id="Layer_x0020_1">
                                <path class="fil0" d="M736.006 801.199h575.996c17.673 0 32 14.328 32 32v381.602c0 17.673-14.327 32-32 32H736.006c-17.673 0-32-14.327-32-32V833.2c0-17.673 14.327-32.001 32-32.001zm543.995 64.002H768.007v317.6h511.994V865.2z" fill ="white" stroke="white" strokeWidth={12}/>
                                <path class="fil0" d="M755.631 808.074c-13.876-10.838-33.913-8.375-44.75 5.5-10.839 13.876-8.376 33.913 5.5 44.751l287.968 225.47-.074.093c12.596 9.862 30.272 8.79 41.592-1.823l285.76-223.74c13.875-10.838 16.338-30.875 5.5-44.75-10.838-13.876-30.875-16.339-44.75-5.501l-268.374 210.125L755.63 808.074z" fill="white"/>
                                <path class="fil0" d="M671.999 255.998H1376c44.033 0 84.041 17.992 113.026 46.975 28.983 28.984 46.975 68.993 46.975 113.026v95.997c0 17.673-14.328 32.001-32.001 32.001h-16.062v960H1504c17.673 0 32 14.328 32 32.001V1632c0 44.033-17.99 84.042-46.974 113.027C1460.042 1774.01 1420.033 1792 1376 1792H671.999c-44.033 0-84.041-17.991-113.026-46.974-28.983-28.985-46.975-68.993-46.975-113.026v-96.003c0-17.673 14.328-32 32.001-32h16.06v-960H544c-17.673 0-32-14.329-32-32.002V416c0-44.033 17.99-84.042 46.974-113.026 28.984-28.983 68.993-46.975 113.026-46.975zM1376 320H671.999c-26.367 0-50.361 10.81-67.775 28.223C586.81 365.637 576 389.631 576 415.998v63.997h16.06c17.674 0 32.002 14.328 32.002 32.001v1024c0 17.673-14.328 32-32.001 32H576v64.002c0 26.367 10.809 50.362 28.223 67.776 17.414 17.414 41.408 28.223 67.775 28.223H1376c26.367 0 50.361-10.81 67.775-28.223 17.414-17.414 28.224-41.409 28.224-67.775v-64.002h-16.062c-17.673 0-32-14.328-32-32v-1024c0-17.674 14.327-32.002 32-32.002h16.062v-63.997c0-26.367-10.81-50.36-28.224-67.775C1426.361 330.81 1402.367 320 1376 320z"
                                fill="white"/>
                                <path class="fil0" d="M550.966 479.998c-17.673 0-32 14.328-32 32 0 17.674 14.327 32.002 32 32.002H1497.036c17.673 0 32-14.328 32-32.001s-14.327-32.001-32-32.001H550.966zM550.966 1504c-17.673 0-32 14.328-32 32 0 17.674 14.327 32.002 32 32.002H1497.036c17.673 0 32-14.328 32-32.001s-14.327-32.001-32-32.001H550.966zM895.999 367.998c-17.673 0-32 14.328-32 32 0 17.674 14.327 32.002 32 32.002h256.002c17.673 0 32-14.328 32-32.001s-14.327-32.001-32-32.001H895.999zM971.672 1616c-17.673 0-32 14.328-32 32 0 17.674 14.327 32.002 32 32.002h104.655c17.673 0 32-14.328 32-32.001S1094 1616 1076.328 1616H971.672z" fill="white"/>
                            </g>
                            <path  d="M0 0h2048v2048H0z" stroke="white" strokeWidth={23}/>
                        </svg>
                        <span className=" text-gray-300 dark:text-gray-200 mx-2 flow">{email}</span>
                    </div>
                    
                    <div className="flex mt-4 space-x-3 md:mt-6">
                       
                        <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={showFormHandler}> Add New Entry</button>
                        <a href="www.instagram.com" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
                    </div>
                </div>
            </div> 
        </Fragment>
    )
};
export default MasonData;