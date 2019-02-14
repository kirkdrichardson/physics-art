// Cleaned up commented code here so as not to pollute
// The working environment

// ./src/common/Breakpoints.js
//
//   const Content = styled.div`
//     height: 3em;
//     width: 3em;
//     background: papayawhip;
//     /* Now we have our methods on media and can use them instead of raw queries */
//     ${media.desktop`background: dodgerblue;`}
//     ${media.tablet`background: mediumseagreen;`}
//     ${media.phone`background: palevioletred;`}
//   `;
//   render(
//     <Content />
//   );
// const ImageContainer = styled.div`
// `;

// ./src/componenet/home/Home.js
// 
// const ContentContainer = styled.div`
//     display: flex;
//     flex-flow: row wrap;
// `;
// const Image = styled.img`
//     background: red;
//     width: calc(100vw - (50px * 2) - (16px * 2));
//     height: calc((100vw - (50px * 2) - (16px * 2)) / 1.77)
//     ${media.tablet`
//         width: calc(100vw - (50px * 2) - (16px * 2));
//         height: calc((100vw - (50px * 2) - (16px * 2)) / 1.77);
//     `}
//     ${media.mobile`
//         width: calc(100vw - (20px * 2) - (16px * 2));
//         height: calc((100vw - (20px * 2) - (16px * 2)) / 1.77);
//     `}
// `;


// function Sidebar(props: RouterProps) {
    // const [open, setOpen] = useState(false);
    // const [displayOverlay, setDisplayOverlay] = useState(false);

    // open & close methods are split for transitions & event listeners 
    // const closeSidebar = (): void => {
    //     if (open) {
    //         setDisplayOverlay(false);
    //         setTimeout(() => setOpen(false), 50);
    //     }
    // }

    // const openSidebar = (): void => {
    //     setOpen(true);
    //     // add delay to allow overlay transition to run
    //     setTimeout(() => setDisplayOverlay(true), 50);
    // }

    // // add event listener to document when {{open}} changes. Remove on unmount.
    // useEffect(() => {
    //     if (open) {
    //         document.addEventListener('click', closeSidebar);
    //     } else {
    //         document.removeEventListener('click', closeSidebar);
    //     }

    //     return document.removeEventListener('click', closeSidebar);
    // }, [open]);

//     return (
//         <div>
//             {/* <Button onClick={open ? closeSidebar : openSidebar}>
//                 <TriggerIcon className="material-icons">view_module</TriggerIcon>
//             </Button>

//             <SidebarWrapper open={open}>
//                 <StyledList>
//                     {props.routes.map(route =>
//                         <React.Fragment key={route.path}>
//                             <SidebarListItem path={route.path} data={route.sidebar} active={route.path === props.location.pathname} />
//                             { route.path === '/' && <Divider />}
//                         </React.Fragment>
//                     )}
//                 </StyledList>
//             </SidebarWrapper>

//             {open && <FixedPositionOverlay show={displayOverlay} /> } */}
//         </div>
//     );
// }