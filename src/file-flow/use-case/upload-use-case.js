class UploadUseCase {
  async execute(file, user) {
    if (!file) {
      throw new BadRequestException('Nenhum arquivo enviado.');
    }

    console.log(file);
  }
}

export default new UploadUseCase();
