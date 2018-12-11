import React, { Component } from 'react';


class UIShell extends Component {
  render() {
    return (
        <Unknown>
        <Header aria-label="IBM Platform Name">
        <SkipToContent>
        Skip to main content
        </SkipToContent>
        <HeaderMenuButton aria-label="Open menu" onClick={Menu clicked} />
        <HeaderName href="#">
        [Platform]
        </HeaderName>
        <HeaderNavigation aria-label="IBM [Platform]">
        <Unknown href="#">
        Catalog
        </Unknown>
        <Unknown href="#">
        Docs
        </Unknown>
        <Unknown href="#">
        Support
        </Unknown>
        <Unknown aria-label="Manage">
        <Unknown href="#">
        Link 1
        </Unknown>
        <Unknown href="#">
        Link 2
        </Unknown>
        <Unknown href="#">
        Link 3
        </Unknown>
        </Unknown>
        </HeaderNavigation>
        <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Notifications" onClick={notification click}>
        <Notification16/>
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Profile" onClick={user click}>
        <User16/>
        </HeaderGlobalAction>
        </HeaderGlobalBar>
        </Header>
        <SideNav aria-label="Side navigation">
        <SideNavHeader icon={<Fade16 />}>
        <SideNavDetails title="Side navigation title">
        <Unknown labelText="Switcher" onChange={switcher changed} options={['Option 1','Option 2','Option 3']} />
        </SideNavDetails>
        </SideNavHeader>
        <SideNavItems>
        <SideNavLink_SideNavLink icon={<Fade16 />} href="javascript:void(0)">
        Link
        </SideNavLink_SideNavLink>
        <Unknown
          defaultExpanded
          icon={<Fade16 />}
          isActive
          title="Category title"
        >
        <Unknown href="javascript:void(0)">
        Link
        </Unknown>
        <Unknown aria-current="page" href="javascript:void(0)">
        Link
        </Unknown>
        <Unknown href="javascript:void(0)">
        Link
        </Unknown>
        </Unknown>
        </SideNavItems>
        </SideNav>
        <StoryContent/>
        </Unknown>
    );
  }
}

export default UIShell;
