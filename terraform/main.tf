terraform {
    backend "s3" {
        bucket = "cc-tf-state-backend-cicd"
        key = "tf-infra/terraform.tfstate"
        region = "ap-south-1"
        dynamodb_table = "terraform-state-locking"
        encrypt = true
    }
    required_providers {
        aws = {
            source = "hashicorp/aws"
            version = "~> 4.47.0"
        }
    }
}

provider "aws" {
    region = "ap-south-1"
    access_key = var.AWS_ACCESS_KEY_ID
    secret_key = var.AWS_SECRET_ACCESS_KEY
}
