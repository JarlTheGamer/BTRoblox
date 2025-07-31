// BTRoblox Profile Fix Test Script
// Run this in the browser console on a Roblox profile page to test the fixes

(function testProfileFix() {
    console.log("🔧 Testing BTRoblox Profile Fix...");
    
    // Test 1: Check if profile container is found
    const profileContainers = [
        document.querySelector(".profile-container"),
        document.querySelector("#container-main"),
        document.querySelector(".container-main")
    ].filter(Boolean);
    
    console.log(`✅ Profile containers found: ${profileContainers.length}`);
    profileContainers.forEach((container, i) => {
        console.log(`   ${i + 1}. ${container.className || container.id}`);
    });
    
    // Test 2: Check for avatar elements
    const avatarElements = [
        document.querySelector(".profile-avatar"),
        document.querySelector(".profile-current-wearing-avatar"),
        document.querySelector("#profile-current-wearing-avatar")
    ].filter(Boolean);
    
    console.log(`✅ Avatar elements found: ${avatarElements.length}`);
    avatarElements.forEach((element, i) => {
        console.log(`   ${i + 1}. ${element.className || element.id}`);
    });
    
    // Test 3: Check for tab structure
    const tabElements = [
        document.querySelector(".rbx-tabs-horizontal"),
        document.querySelector(".tab-content"),
        document.querySelector(".nav-tabs")
    ].filter(Boolean);
    
    console.log(`✅ Tab elements found: ${tabElements.length}`);
    tabElements.forEach((element, i) => {
        console.log(`   ${i + 1}. ${element.className || element.id}`);
    });
    
    // Test 4: Check for statistics container
    const statsElements = [
        document.querySelector(".profile-statistics"),
        document.querySelector("#profile-statistics-container")
    ].filter(Boolean);
    
    console.log(`✅ Statistics elements found: ${statsElements.length}`);
    statsElements.forEach((element, i) => {
        console.log(`   ${i + 1}. ${element.className || element.id}`);
    });
    
    // Test 5: Check for friends container
    const friendsElements = [
        document.querySelector("#friends-carousel-container"),
        document.querySelector(".friends-carousel-container"),
        document.querySelector("[data-testid='friends-carousel']")
    ].filter(Boolean);
    
    console.log(`✅ Friends elements found: ${friendsElements.length}`);
    friendsElements.forEach((element, i) => {
        console.log(`   ${i + 1}. ${element.className || element.id}`);
    });
    
    // Test 6: Check if BTRoblox is active
    const btrProfile = document.body.classList.contains("btr-profile");
    console.log(`${btrProfile ? "✅" : "❌"} BTRoblox profile class: ${btrProfile}`);
    
    // Test 7: Check for BTR profile container
    const btrContainer = document.querySelector(".btr-profile-container");
    console.log(`${btrContainer ? "✅" : "❌"} BTR profile container: ${!!btrContainer}`);
    
    console.log("🔧 Profile fix test completed!");
    
    return {
        profileContainers: profileContainers.length,
        avatarElements: avatarElements.length,
        tabElements: tabElements.length,
        statsElements: statsElements.length,
        friendsElements: friendsElements.length,
        btrActive: btrProfile,
        btrContainer: !!btrContainer
    };
})();