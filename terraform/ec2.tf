# resource "aws_key_pair" "my_key_pair" {
#   key_name   = "my_key_pair"
#   public_key = file("/home/runner/.ssh/my_key_pair.pub")
# }
resource "aws_instance" "ec2_instance" {
  ami           = "ami-0c768662cc797cd75"
  instance_type = "t2.micro"
  key_name      = var.SSH_KEY_NAME
  security_groups = [aws_security_group.instance_sg.name]
  tags = {
    Name = "twitsy-prod"
  }

  provisioner "local-exec" {
    command = <<-EOT
      echo ${aws_instance.ec2_instance.public_ip} > ../ansible/inventory.yml
      chmod 600 ../ansible/inventory
      ssh-keyscan -H ${aws_instance.ec2_instance.public_ip} > /home/runner/.ssh/known_hosts
      chmod 600 /home/runner/.ssh/known_hosts
    EOT
  }

  user_data = <<-EOF
              #!/bin/bash
              echo "hello world" > test.txt
              EOF
}
