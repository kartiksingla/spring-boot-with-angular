package com.migration.gradle.app.model;

public class Dependencies {

    private String dependenciesClosure;

    private String gradleProperties;

    private String errorMessage;

    public Dependencies(String dependenciesClosure, String gradleProperties) {
        this.dependenciesClosure = dependenciesClosure;
        this.gradleProperties = gradleProperties;
    }

    public Dependencies(String dependenciesClosure, String gradleProperties, String errorMessage) {
        this.dependenciesClosure = dependenciesClosure;
        this.gradleProperties = gradleProperties;
        this.errorMessage = errorMessage;
    }

    public String getDependenciesClosure() {
        return dependenciesClosure;
    }

    public void setDependenciesClosure(String dependenciesClosure) {
        this.dependenciesClosure = dependenciesClosure;
    }

    public String getGradleProperties() {
        return gradleProperties;
    }

    public void setGradleProperties(String gradleProperties) {
        this.gradleProperties = gradleProperties;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }
}
