resource "aws_instance" "ec2_instance" {
  ami           = "ami-0c768662cc797cd75"
  instance_type = "t2.micro"
  key_name      = var.SSH_KEY_NAME
  security_groups = [aws_security_group.instance_sg.name]
  tags = {
    Name = "twitsy-prod"
  }

  provisioner "local-exec" {
    command = "echo ${aws_instance.ec2_instance.public_ip} > ../ansible/inventory"
  }

  triggers = {
    always_run = timestamp()
  }
  user_data = <<-EOF
              #!/bin/bash
              echo "hello world"
              EOF
}
