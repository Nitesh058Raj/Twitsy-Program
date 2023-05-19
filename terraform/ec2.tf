resource "aws_key_pair" "my_key_pair" {
  key_name   = "my_key_pair"
  public_key = file("my_key_pair.pub")
}
resource "aws_instance" "ec2_instance" {
  ami           = "ami-0c768662cc797cd75"
  instance_type = "t2.micro"
  key_name      = aws_key_pair.my_key_pair.key_name
  security_groups = [aws_security_group.instance_sg.name]
  tags = {
    Name = "twitsy-prod"
  }

  provisioner "local-exec" {
    command = "echo ${aws_instance.ec2_instance.public_ip} > ../ansible/inventory"
  }

  user_data = <<-EOF
              #!/bin/bash
              echo "hello world" > test.txt
              EOF
}
