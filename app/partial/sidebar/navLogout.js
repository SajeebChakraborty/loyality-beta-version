import Link from "next/link";

export default function NavLogout() {
    return (
        <div className='user-logout'>
        <Link href='/login' className='logout-link flex-ctr-spb'>
            <span>Logout </span>
            <span className='icon'>
                <svg
                    width='14'
                    height='14'
                    viewBox='0 0 14 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M13.4543 11.5543C13.447 11.8132 13.3878 12.068 13.2801 12.3035C13.1724 12.539 13.0185 12.7505 12.8276 12.9254C12.6366 13.1003 12.4124 13.2351 12.1683 13.3216C11.9242 13.4082 11.6653 13.4448 11.4068 13.4293C9.792 13.4383 8.17725 13.4293 6.5625 13.4293C6.46304 13.4293 6.36766 13.3898 6.29733 13.3195C6.22701 13.2492 6.1875 13.1538 6.1875 13.0543C6.1875 12.9549 6.22701 12.8595 6.29733 12.7892C6.36766 12.7188 6.46304 12.6793 6.5625 12.6793C8.2125 12.6793 9.8625 12.7033 11.5125 12.6793C12.3428 12.6673 12.7043 12.0433 12.7043 11.3008V1.95358C12.71 1.71753 12.6436 1.48534 12.5139 1.28805C12.3842 1.09077 12.1973 0.937791 11.9783 0.849584C11.7193 0.778918 11.4499 0.754793 11.1825 0.778333H6.5625C6.46304 0.778333 6.36766 0.738825 6.29733 0.668499C6.22701 0.598172 6.1875 0.50279 6.1875 0.403333C6.1875 0.303877 6.22701 0.208495 6.29733 0.138168C6.36766 0.0678422 6.46304 0.0283333 6.5625 0.0283333C8.2305 0.0283333 9.91125 -0.0354167 11.5777 0.0283333C11.833 0.0347875 12.0843 0.0919318 12.3172 0.196441C12.5502 0.30095 12.76 0.450737 12.9344 0.637086C13.1089 0.823435 13.2446 1.04262 13.3336 1.2819C13.4226 1.52117 13.4631 1.77576 13.4528 2.03083L13.4543 11.5543Z'
                        fill='white'
                    />
                    <path
                        d='M0.109864 6.46568C0.0464981 6.52712 0.00940175 6.61072 0.00636398 6.69893C0.00636398 6.71018 0.00636395 6.71993 0.00186395 6.73118C-0.00263604 6.74243 0.00186399 6.75143 0.00636398 6.76193C0.009365 6.85036 0.0464519 6.93421 0.109864 6.99593L2.86161 9.74768C2.93234 9.81599 3.02706 9.85378 3.12539 9.85293C3.22371 9.85208 3.31777 9.81264 3.3873 9.74311C3.45682 9.67358 3.49626 9.57953 3.49712 9.4812C3.49797 9.38288 3.46017 9.28815 3.39186 9.21743L1.28061 7.10543H9.33711C9.43657 7.10543 9.53195 7.06592 9.60228 6.99559C9.6726 6.92527 9.71211 6.82988 9.71211 6.73043C9.71211 6.63097 9.6726 6.53559 9.60228 6.46526C9.53195 6.39494 9.43657 6.35543 9.33711 6.35543H1.28061L3.39186 4.24343C3.46017 4.1727 3.49797 4.07798 3.49712 3.97965C3.49626 3.88133 3.45682 3.78727 3.3873 3.71775C3.31777 3.64822 3.22371 3.60878 3.12539 3.60792C3.02706 3.60707 2.93234 3.64487 2.86161 3.71318L0.109864 6.46568Z'
                        fill='white'
                    />
                </svg>
            </span>
        </Link>
    </div>
    );
}
