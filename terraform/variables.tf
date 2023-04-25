variable "SSH_KEY_NAME" {
  type    = string
  default = "ec2-key" 
}

# if var is not provided it will be = ""
variable "AWS_ACCESS_KEY_ID" {
  type    = string
  default = ""
}

variable "AWS_SECRET_ACCESS_KEY" {
  type    = string
  default = ""
}
