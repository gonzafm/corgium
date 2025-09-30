plugins {
    // Apply the application plugin to add support for building a CLI application in Java.
    application
    id("dev.nx.gradle.project-graph") version("0.1.5")
}
allprojects {
    apply {
        plugin("dev.nx.gradle.project-graph")
    }
}

repositories {
    // Use Maven Central for resolving dependencies.
    mavenCentral()
}


dependencies {
    // Use JUnit Jupiter for testing.
    testImplementation(libs.junit.jupiter)
    testImplementation("org.assertj:assertj-core:3.27.2")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")

    // This dependency is used by the application.
    implementation(libs.guava)
}

// Apply a specific Java toolchain to ease working on different environments.
java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(25)
    }
}

application {
    // Define the main class for the application.
    mainClass = "org.corgium.training.App"
}

tasks.named<Test>("test") {
    // Use JUnit Platform for unit tests.
    useJUnitPlatform()
}