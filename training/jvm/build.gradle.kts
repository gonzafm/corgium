plugins {
    id("java")
    id("dev.nx.gradle.project-graph") version("0.1.8")
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
    testImplementation(platform("org.junit:junit-bom:6.0.0"))
    testImplementation("org.assertj:assertj-core:3.27.2")
    testImplementation("org.junit.jupiter:junit-jupiter")
	testRuntimeOnly("org.junit.platform:junit-platform-launcher")

}

// Apply a specific Java toolchain to ease working on different environments.
java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(25)
    }
}

tasks.test {
	useJUnitPlatform()
	testLogging {
		events("passed", "skipped", "failed")
	}
}